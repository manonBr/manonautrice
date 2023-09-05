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
const Columns = ({number, layout, reverse, className = "", children:columns}) => {
    const classReverse = reverse ? "columns--reverse" : ""

    switch (layout) {
        case "leftBigger":
            return (
                <div className={`columns columns--${number} columns--leftBigger ${classReverse} ${className}`}>
                    {columns}
                </div>
            )
            case "rightBigger":
                return (
                    <div className={`columns columns--${number} columns--rightBigger ${classReverse} ${className}`}>
                        {columns}
                    </div>
                )
        default:
            return (
                <div className={`columns columns--${number} ${classReverse} ${className}`}>
                    {columns}
                </div>
            )
    }

}

/**
 * 
 * @param {Object} props 
 * @param {*} props.children - Content of the Column
 * @returns 
 */
const Column = ({children:content, className = ""}) => {

    return(
        <div className={`columns__item ${className}`}>
            {content}
        </div>
    )
}

export {Columns, Column}