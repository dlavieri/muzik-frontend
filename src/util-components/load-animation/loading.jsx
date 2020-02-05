import React from 'react';
import './loading.css';

const LoadingAnimation = () => {
    return (
        <div className="animation-container">
            <div className="load-container">
                <div className="loading __1" /> 
                <div className="loading __2" /> 
                <div className="loading __3" /> 
            </div>
        </div>
    )
}

export default LoadingAnimation;