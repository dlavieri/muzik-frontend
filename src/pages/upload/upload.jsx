import React, { Component } from 'react';
import './upload.css';
import axios from 'axios';
import firebase from '../../storage/firebase';


class UploadPage extends Component {

    state = {
        mp3: '',
        mp3Path: '',
        songName: '',
        mood: 'joy',
    }

    handleInputs = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { songName, mood } = this.state;
        let mp3Path;
        let file = document.getElementById("mp3FormInput").files[0];
        let storageRef = firebase.storage().ref();
        
        if (file.type != "audio/mp3") {
            return;
        }

        storageRef.child(file.name).put(file)
        .then(snapshot => {
            return snapshot.ref.getDownloadURL();
        })
        .then(downloadURL => {
            mp3Path = downloadURL;
            return mp3Path;
        })
        .then(() => {
            axios.post(`https://desolate-shore-33045.herokuapp.com/add-music`, { mp3Path, songName, mood });
        })
        .then(res => {
            this.setState({
                mp3: '',
                mp3Path: '',
                songName: '',
                mood: 'joy',
            })
        })
        .catch(err => console.log(err));
    }



    render() {
        const { mp3, mp3Path, songName } = this.state;
    return (
        <div className="upload-page">
            <h5>Add a new song - beta</h5>
            <form className="form-group">
                <input type="file" id="mp3FormInput" value={mp3} className="form-control" name="mp3" onBlur={this.handleInputs} onChange={this.handleInputs}></input>
                <input type="text" id="mp3PathFormInput" value={mp3Path} className="form-control" name="mp3Path" placeholder="mp3 Path" onBlur={this.handleInputs} onChange={this.handleInputs}></input>
                <input type="text" id="songNameFormInput" value={songName} className="form-control" name="songName" placeholder="Song Name" onBlur={this.onBlur} onChange={this.handleInputs}></input>
                <select className="form-control" name="mood" onChange={this.handleInputs} onBlur={this.handleInputs}>
                    <option value="joy">Joy</option>
                    <option value="sad">Sad</option>
                    <option value="rage">Angry</option>
                    <option value="relaxing">Relaxing</option>
                    <option value="dark">Dark</option>
                    <option value="inspiring">Inspiring</option>
                    <option value="love">Love</option>
                    <option value="epic">Epic</option>
                </select>

                <button className="btn btn-light" onClick={this.handleSubmit}>Add Song</button>
            </form>
        </div>
    )}
}

export default UploadPage;