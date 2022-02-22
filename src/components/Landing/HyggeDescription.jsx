import React from 'react'
import houseIcon from '../../assets/logos/House-icon.png'
import starIcon from '../../assets/logos/Star-icon.png'
import phoneIcon from '../../assets/logos/Phone-icon.png'
import '../../styles/components/Landing/HyggeDescription.css'

const HyggeDescription = () => {
    return (
        <div className="Hygge-description">
            <p>En Hygge podrás encontrar:</p>
            <div className="Hygge-description-element">
                <figure className="Icon">
                    <img src={houseIcon} alt="House icon" />
                </figure>
                <p>Posadas en lugares inesperados</p>
            </div>
            <div className="Hygge-description-element">
                <figure className="Icon">
                    <img src={starIcon} alt="Star icon" />
                </figure>
                <p>Precios únicos en alojamientos y aventura</p>
            </div>
            <div className="Hygge-description-element">
                <figure className="Icon">
                    <img src={phoneIcon} alt="Phone icon" />
                </figure>
                <p>Una experiencia inolvidable al alcance de tus manos</p>
            </div>
        </div>
    )
}

export { HyggeDescription }