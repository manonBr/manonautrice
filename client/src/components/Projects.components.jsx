import React from "react"
import { Column, Columns } from "../layouts/Columns.layouts"
import { Subheading } from "../features/elements/Headings.features"
import Button from "../features/forms/button.features"
import "./Projects.components.scss"

const EnhancedProject = ({image, title, link, children}) => {
    return (
        <Columns number="two" layout="rightBigger" className="mainProject">
            <Column className="mainProject__img">
                <img src={image.url} alt={image.alt_tag}/>
            </Column>
            <Column className="mainProject__content">
                {title &&
                    <Subheading>{title}</Subheading>
                }
                <div className="pitch">
                    {children}
                </div>
                {link &&
                    <Button link={link} type="secondary">En savoir +</Button>
                }
            </Column>
        </Columns>
    )
}

const MinimalistProject = ({title, genre, children}) => {
    return (
        <div className="secondaryProject">
            <Subheading>{title}</Subheading>
            <span className="secondaryProject__genre">{genre}</span>
            {children}
        </div>
    )
}



export {EnhancedProject, MinimalistProject}