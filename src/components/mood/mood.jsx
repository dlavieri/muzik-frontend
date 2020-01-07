import React from 'react';
import './mood.css';
import { Link } from 'react-router-dom';


export default function Mood (props) {
    return (
        <Link to={"/moods/" + props.moodId} className="mood__link">
            <div className="mood" style={{backgroundImage: `url(${props.img})`}}>
                {props.name}
            </div>
        </Link>
    )
}