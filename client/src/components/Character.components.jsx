import React from "react"
import "./Character.components.scss"

/**
 * 
 * @param {Object} props 
 * @param {string} props.name
 * @param {Object} props.image -- {url: String, alt_tag: String}
 * @param {string} props.children
 * @returns 
 */
const Character = ({name, image, children}) => {
    return (
        <>
            <div className="character__header">
                <img src={image.url} alt={image.alt_tag}></img>
                <p className="character__name">{name}</p>
            </div>
            <div className="character__description">
                {children}
            </div>
        </>
    )
}

export default Character