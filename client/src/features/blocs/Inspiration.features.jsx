import * as React from "react"
import "./Inspirations.features.scss"
import { Columns } from "../../layouts/Columns.layouts"
import { Subheading } from "../elements/Headings.features"

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
            <div className="inspirations__item__ttl">
                <img src={image} alt={altTag} class="illustrations" />
                <Subheading>{title}</Subheading>
            </div>
            <p>{content}</p>
        </>
    )
}

export default Inspiration