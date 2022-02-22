import React from 'react'
import '../../styles/components/Landing/HomeContent.css'
import { AboutHygge } from './AboutHygge'
import { AboutUs } from './AboutUs'
import { HyggeDescription } from './HyggeDescription'
import { VideoPlayer } from './VideoPlayer'

const HomeContent = () => {
    return (
        <div className="Home-flex">
            <AboutHygge />
            <HyggeDescription />
            <AboutUs />
            <VideoPlayer />
        </div>
    )
}

export { HomeContent }