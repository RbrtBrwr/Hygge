import React from 'react'
import '../../styles/components/Landing/HomeContent.css'
import { AboutHygge } from './AboutHygge'
import { AboutUs } from './AboutUs'
import { HyggeDescription } from './HyggeDescription'

const HomeContent = () => {
    return (
        <div className="Home-flex">
            <AboutHygge />
            <HyggeDescription />
            <AboutUs />
        </div>
    )
}

export { HomeContent }