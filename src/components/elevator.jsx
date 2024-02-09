import React from 'react';
import ReactPlayer from 'react-player/lazy';
import '../styled/Elevator.css';

const Elevator = () => {
    return (
        <div className="elevator-container">
            <h1 className="elevator-title">My Elevator Peach</h1>
            <div className="player-wrapper">
                <ReactPlayer
                    className="react-player"
                    url='https://www.youtube.com/embed/4WEQtgnBu0I'
                    width='100%'
                    height='100%'
                    controls={true} 
                    onError={(e) => console.log('Error:', e)}
                />
            </div>
        </div>
    );
}

export default Elevator;
