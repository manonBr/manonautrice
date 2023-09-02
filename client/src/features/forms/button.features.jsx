import * as React from "react"
import "./Button.features.scss"
import { useContext } from "react"
import { CursorContext } from "../../App"
import { toggleClassCursor } from "../../helpers/cursor"

/**
 * 
 * @param {Object} props 
 * @param {string} props.link - Link of the button
 * @param {string} props.type - "primary" or "secondary"
 * @param {string} props.children
 * @returns 
 */
const Button = ({link, type, children:label}) => {
    const cursor = useContext(CursorContext)

    const handleMouseEnter = () => {
        toggleClassCursor(cursor, true)
    }
    const handleMouseLeave = () => {
        toggleClassCursor(cursor, false)
    }

    return (
        <a href={link} className={"btn btn--" + type} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <span>{label}</span>
        </a>
    )
}

export default Button