import * as React from "react"
import "./Button.features.scss"

/**
 * 
 * @param {Object} props 
 * @param {string} props.link - Link of the button
 * @param {string} props.type - "primary" or "secondary"
 * @param {string} props.children
 * @returns 
 */
const Button = ({link, type, children:label}) => {

    return (
        <a href={link} className={"btn btn--" + type}>
            <span>{label}</span>
        </a>
    )
}

export default Button