import React from "react"
import "./Headings.features.scss"

const Heading = ({level, children}) => {

    return (
        <h1 className={`title title--${level}`}>{children}</h1>
    )
}

const Subheading = ({children}) => {
    return (
        <h2 className="subttl">{children}</h2>
    )
}

export {Heading, Subheading}