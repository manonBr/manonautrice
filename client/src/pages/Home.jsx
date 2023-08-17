import React from "react"
import "./Home.scss"
import { Column, Columns } from "../layouts/Columns.layouts"
import { Heading } from "../features/elements/Headings.features"
import Button from "../features/forms/button.features"
import Inspiration from "../features/blocs/Inspiration.features"

const Home = () => {
    return (
        <>
            <section className="presentation">
                <Columns number="2" layout="rightBigger" className="section__container">
                        <Column className="presentation__img"></Column>
                        <Column className="presentation__content">
                            <Heading level="primary">Titre</Heading>
                            <p>Lorem</p>
                            <div className="presentation__links">
                                <Button link="#" type="primary">Call to action 1</Button>
                                <Button link="#" type="secondary">Call to action 2</Button>
                            </div>
                        </Column>
                </Columns>
            </section>
            
            <section className="inspirations">
                <div className="section__container">
                    <Heading level="primary">Titre</Heading>
                    <Columns number="three" className="inspirations__container">
                        <Column className="inspirations__item">
                            <Inspiration title="Titre 1" image="/img/fantasy.png" altTag="Illustration fantasy">LALALA</Inspiration>
                        </Column>
                        <Column className="inspirations__item">
                            <Inspiration title="Titre 2" image="/img/fantasy.png" altTag="Illustration fantasy">LALALA</Inspiration>
                        </Column>
                        <Column className="inspirations__item">
                            <Inspiration title="Titre 3" image="/img/fantasy.png" altTag="Illustration fantasy">LALALA</Inspiration>
                        </Column>
                    </Columns>
                </div>
            </section>
        </>
    )
}

export default Home