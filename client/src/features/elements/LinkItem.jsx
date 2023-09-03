import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { CursorContext } from "../../App"
import { toggleClassCursor } from "../../helpers/cursor"

const LinkItem = (props) => {
    const cursor = useContext(CursorContext)
    const {isMobile, reloadDocument, children, ...rest} = props

    const handleMouseEnter = () => {
        toggleClassCursor(cursor, true)
    }
    const handleMouseLeave = () => {
        toggleClassCursor(cursor, false)
    }

    if(reloadDocument) {
        return (
            <Link {...rest} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} reloadDocument>{children}</Link>
        )
    } else {
        return (
            <Link {...rest} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{children}</Link>
        )
    }

}


export default LinkItem