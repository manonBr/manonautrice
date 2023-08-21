import React from "react"
import "./Home.scss"
import { Column, Columns } from "../layouts/Columns.layouts"
import { Heading, Subheading } from "../features/elements/Headings.features"
import Button from "../features/forms/button.features"
import Inspiration from "../features/blocs/Inspiration.features"
import { Link } from "react-router-dom"

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

            <section className="socials">
                <div className="section__container">
                    <Heading level="primary">Titre</Heading>
                    <div class="socials__subttls">
                        <Subheading level="secondary">... bla bla bla</Subheading>
                        <Subheading level="secondary">... bla bla bla</Subheading>
                    </div>
                    <div class="socials__links">
                        <Link to="https://www.instagram.com/manonautrice/" target="_blank"><img src="/img/instagram.png" alt="Logo Instagram" /></Link>
                        <Link to="https://www.tiktok.com/@manon.autrice" target="_blank"><img src="/img/tiktok.png" alt="Logo TikTok" /></Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home