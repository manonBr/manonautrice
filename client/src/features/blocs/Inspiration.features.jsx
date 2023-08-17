import * as React from "react"
import "./Inspirations.features.scss"
import { Columns } from "../../layouts/Columns.layouts"

/**
 * 
 * @param {Object} props 
 * @param {string} props.title 
 * @param {string} props.image 
 * @param {string} props.children 
 * @returns 
 */
const Inspiration = ({title, image, altTag, children:content}) => {

    return(
        <>
            <Columns number="two" layout="rightBigger" className="inspirations__item__ttl">
                <img src={image} alt={altTag} class="illustrations" />
                <h2 class="subttl">{title}</h2>
            </Columns>
            <p>{content}</p>
        </>
    )
}

export default Inspiration