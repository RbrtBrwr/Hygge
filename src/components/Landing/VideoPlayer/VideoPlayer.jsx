import React from 'react'
import beachVideo from '../../../assets/videos/Beach.mp4'
import smallLogo from '../../../assets/logos/logo-small-white.png'
import './VideoPlayer.css'

const VideoPlayer = () => {
    return (
        <div className="Video-player">
            <figure className='Video-player-logo'>
                <img src={smallLogo} alt="Hygge's Logo" />
            </figure>
            <video className='Home-video' id='Home-video' autoPlay={true} muted>
                <source src={beachVideo} />
            </video>
            <p>Ingresa y encuentra que aventuras te deparan con nosotros</p>
        </div>
    )
}

export { VideoPlayer };