import React, { Component } from 'react';
import { connect } from 'react-redux';
import './footer.css';
import { bindActionCreators } from 'redux';

import { pauseSong, resumeSong } from '../../redux/actions/actions';


class Footer extends Component {

    componentDidMount = () => {
        this.player.addEventListener("timeupdate", () => {
            let ratio = this.player.currentTime / this.player.duration;
            let position = (this.timeline.offsetWidth * ratio) + this.timeline.offsetLeft;
            this.updateProgress(position);
        });
    }

    componentDidUpdate = () => {
        const { songDetails, isPlaying, pausedTime } = this.props;
        if (songDetails) {
            this.player.src = songDetails.mp3Path + "#t=" + pausedTime;
            if (isPlaying) {
                this.player.play();
            }
        }
    }

    togglePlay = () => {
        const { isPlaying, pauseSong, resumeSong, songDetails, pausedTime } = this.props;
        if (isPlaying) {
            this.player.pause();
            pauseSong(this.player.currentTime);
        } else if (!isPlaying && songDetails) {
            this.player.currentTime = pausedTime;
            console.log(this.player.currentTime);
            this.player.play();
            resumeSong();
        }
    }

    updateProgress = (position) => {
        const timelineWidth = this.timeline.offsetWidth - this.handle.offsetWidth;
        const handleLeft = position - this.timeline.offsetLeft;
        if (handleLeft >= 0 && handleLeft <=timelineWidth) {
            this.handle.style.marginLeft = handleLeft + "px";
            this.progress.style.width = handleLeft + "px";
        }
        if (handleLeft < 0) {
            this.handle.style.marginLeft = "0px";
            this.progress.style.width = "0px";
        }
        if (handleLeft > timelineWidth) {
            this.handle.style.marginLeft =  timelineWidth + "px";
            this.progress.style.width = timelineWidth + "px";
        }
    }

    mouseMove = (e) => {
        e.preventDefault();
        this.updateProgress(e.pageX);
        if (this.player.duration) {
        this.player.currentTime = ((e.pageX - this.timeline.offsetLeft) / this.timeline.offsetWidth) * this.player.duration;
        }
    }

    mouseUp = () => {
        window.removeEventListener("mousemove", this.mouseMove);
        window.removeEventListener("mouseup", this.mouseUp)
    }

    mouseDown = () => {
        window.addEventListener("mousemove", this.mouseMove);
        window.addEventListener("mouseup", this.mouseUp);
    }



    render() {
        const { playBtn, pauseBtn, resumeBtn } = this.props;
        return (
            <div className="app-footer">
                <div className="footer-controls">
                    
                    <div className="footer-playbtn__border">
                        { playBtn ? <i className="fas fa-play"></i> : null }
                        { pauseBtn ? <i className="fas fa-pause" onClick={this.togglePlay}></i> : null }
                        { resumeBtn ? <i className="fas fa-play" onClick={this.togglePlay}></i> : null }
                    </div>
                    
                </div>

                <audio id="audioPlayer" ref={player => this.player = player}/>

                <div id="timeline" className="footer-timeline" onClick={this.mouseMove} ref={timeline => this.timeline = timeline}>
                    <div className="footer-timeline__progress" id="progress" ref={progress => this.progress = progress} onClick={this.mouseMove}>
                        <div id="handle" onMouseDown={this.mouseDown} ref={handle => this.handle = handle}></div>
                    </div>
                </div>
            </div>                
        )
    }
}

const mapStateToProps = state => {
    return {
        isPlaying: state.isPlaying,
        songDetails: state.songDetails,
        playBtn: state.playBtn,
        resumeBtn: state.resumeBtn,
        pauseBtn: state.pauseBtn,
        pausedTime: state.pausedTime
    }
  }
  
const mapDispatchToProps = dispatch => bindActionCreators({
    pauseSong: pauseSong,
    resumeSong: resumeSong
  }, dispatch)
  

  export default connect(mapStateToProps, mapDispatchToProps)(Footer);