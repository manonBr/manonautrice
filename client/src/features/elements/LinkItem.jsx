import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { CursorContext } from "../../App"
import { toggleClassCursor } from "../../helpers/cursor"

const LinkItem = (props) => {
    const cursor = useContext(CursorContext)
    const {isMobile,children, ...rest} = props

    const handleMouseEnter = () => {
        toggleClassCursor(cursor, true)
    }
    const handleMouseLeave = () => {
        toggleClassCursor(cursor, false)
    }

    return (
        <Link {...props} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{children}</Link>
    )
}


export default LinkItem