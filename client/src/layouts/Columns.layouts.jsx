import * as React from "react"
import "./Columns.layouts.scss"

/**
 * 
 * @param {Object} props 
 * @param {string} props.number - Number of columns written in letters (eg. two, three, etc.) 
 * @param {string} props.layout - Used for Two-Third layouts only (value : "leftBigger" or "rightBigger") 
 * @param {Array} props.children - Columns content, using Column component
 * @returns 
 */
const Columns = (props) => {
    const {number, layout} = props
    const columns = props.children

    let classLayout = ""

    switch (layout) {
        case "leftBigger":
            classLayout = "columns--leftBigger"
            break;

        case "rightBigger":
            classLayout = "columns--rightBigger"
            break;

        default:
            classLayout = ""
            break;
    }

    return (
        <div className={`columns columns--${number} ${classLayout}`}>
            {columns}
        </div>

    )
}

/**
 * 
 * @param {Object} props 
 * @param {*} props.children - Content of the Column
 * @returns 
 */
const Column = (props) => {
    const content = props.children

    return(
        <div className="columns__item">
            {content}
        </div>
    )
}

export {Columns, Column}