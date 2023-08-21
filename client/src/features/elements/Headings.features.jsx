import React from "react"
import "./Headings.features.scss"

/**
 * 
 * @param {Object} props 
 * @param {string} props.level -- "Primary or secondary title"
 * @param {string} props.children 
 * @returns 
 */
const Heading = ({level, children}) => {

    return (
        <h1 className={`title title--${level}`}>{children}</h1>
    )
}

/**
 * 
 * @param {Object} props 
 * @param {string} props.level -- "Primary or secondary subttl"
 * @param {string} props.children 
 * @returns 
 */
const Subheading = ({level, children}) => {
    return (
        <h2 className={`subttl subttl--${level}`}>{children}</h2>
    )
}

export {Heading, Subheading}