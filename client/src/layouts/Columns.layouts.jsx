import * as React from "react"
import "./Columns.layouts.scss"

/**
 * 
 * @param {Object} props 
 * @param {string} props.number - Number of columns written in letters (eg. two, three, etc.) 
 * @param {Array} props.children - Columns content, using Column component
 * @returns 
 */
const Columns = (props) => {
    const {number} = props
    const columns = props.children

    return (
        <div className={"columns columns--" + number}>
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