import React from "react"
import {Subheading } from "../features/elements/Headings.features"
import { Column, Columns } from "../layouts/Columns.layouts"
import "./Listing.scss"
import Button from "../features/forms/button.features"

const Listing = ({title, link, img, reverse, level, children}) => {
    return (
        <section>
            <div className="section__container">
                <Columns number="two" className={`listing listing--${level}`} reverse={reverse}>
                    <Column className="listing__illustration">
                        <img src={img?.url} className="listing__img" alt={img?.alt_tag}></img>
                    </Column>
                    <Column className="listing__description">
                        <div>
                            <Subheading>{title}</Subheading>
                            <div className="listing__details">
                                {children}
                            </div>
                            <Button link={link} type="secondary">Je vais voir !</Button>
                        </div>
                    </Column>
                </Columns>
            </div>
        </section>
    )
}

export default Listing