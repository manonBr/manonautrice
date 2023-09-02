import React from "react"
import { Heading, Subheading } from "../../features/elements/Headings.features"
import { Column, Columns } from "../../layouts/Columns.layouts"
import "./NotionTools.scss"
import Button from "../../features/forms/button.features"

const NotionTools = () => {
    return (
        <>
           <Heading level="primary">
                Templates Notion
            </Heading>

            <section className="socialTemplate template">
                <div className="section__container">
                    <Columns number="two" className="template__container template__container--primary">
                        <Column className="template__illustration">
                            <img src="/img/socialTemplate.jpg" className="template__img" alt="Image d'aperçu du template Notion de gestion des réseaux sociaux"></img>
                        </Column>
                        <Column className="template__description">
                            <Subheading>Gestion de tes réseaux sociaux</Subheading>
                            <div className="template__details">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo porro facilis dolorum nisi sit, ipsum eligendi ratione dolore illo recusandae tenetur praesentium neque accusamus totam velit magnam. Perspiciatis, totam laudantium.</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo porro facilis dolorum nisi sit, ipsum eligendi ratione dolore illo recusandae tenetur praesentium neque accusamus totam velit magnam. Perspiciatis, totam laudantium.</p>
                            </div>
                            <Button link="#" type="secondary">Je vais voir !</Button>
                        </Column>
                    </Columns>
                </div>
            </section>

            <section className="socialTemplate template">
                <div className="section__container">
                    <Columns number="two" className="template__container template__container--secondary" reverse={true}>
                        <Column className="template__illustration">
                            <img src="/img/socialTemplate.jpg" className="template__img" alt="Image d'aperçu du template Notion de gestion des réseaux sociaux"></img>
                        </Column>
                        <Column className="template__description">
                            <Subheading>Gestion de tes réseaux sociaux</Subheading>
                            <div className="template__details">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo porro facilis dolorum nisi sit, ipsum eligendi ratione dolore illo recusandae tenetur praesentium neque accusamus totam velit magnam. Perspiciatis, totam laudantium.</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo porro facilis dolorum nisi sit, ipsum eligendi ratione dolore illo recusandae tenetur praesentium neque accusamus totam velit magnam. Perspiciatis, totam laudantium.</p>
                            </div>
                            <Button link="#" type="primary">Je vais voir !</Button>
                        </Column>
                    </Columns>
                </div>
            </section>

            <section className="socialTemplate template">
                <div className="section__container">
                    <Columns number="two" className="template__container template__container--primary">
                        <Column className="template__illustration">
                            <img src="/img/socialTemplate.jpg" className="template__img" alt="Image d'aperçu du template Notion de gestion des réseaux sociaux"></img>
                        </Column>
                        <Column className="template__description">
                            <Subheading>Gestion de tes réseaux sociaux</Subheading>
                            <div className="template__details">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo porro facilis dolorum nisi sit, ipsum eligendi ratione dolore illo recusandae tenetur praesentium neque accusamus totam velit magnam. Perspiciatis, totam laudantium.</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo porro facilis dolorum nisi sit, ipsum eligendi ratione dolore illo recusandae tenetur praesentium neque accusamus totam velit magnam. Perspiciatis, totam laudantium.</p>
                            </div>
                            <Button link="#" type="secondary">Je vais voir !</Button>
                        </Column>
                    </Columns>
                </div>
            </section>
        </>
    )
}

export default NotionTools