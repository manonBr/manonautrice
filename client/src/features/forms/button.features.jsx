import * as React from "react"
import "./Button.features.scss"
import { useContext } from "react"
import { CursorContext } from "../../App"
import { toggleClassCursor } from "../../helpers/cursor"
import { Link } from "react-router-dom"

/**
 * 
 * @param {Object} props 
 * @param {string} props.link - Link of the button
 * @param {string} props.type - "primary" or "secondary"
 * @param {string} props.children
 * @returns 
 */
const Button = ({link, type, reloadDocument, children:label}) => {
    const cursor = useContext(CursorContext)

    const handleMouseEnter = () => {
        toggleClassCursor(cursor, true)
    }
    const handleMouseLeave = () => {
        toggleClassCursor(cursor, false)
    }
    if(reloadDocument) {
        return (
            <Link to={link} className={"btn btn--" + type} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} reloadDocument>
                <span>{label}</span>
            </Link>
        )
    } else {
        return (
            <Link to={link} className={"btn btn--" + type} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <span>{label}</span>
            </Link>
        )
    }
}

export default Button