import React, { useEffect, useState } from "react"
import "./Home.scss"
import { Column, Columns } from "../layouts/Columns.layouts"
import { Heading, Subheading } from "../features/elements/Headings.features"
import Button from "../features/forms/button.features"
import Inspiration from "../features/blocs/Inspiration.features"
import { Link } from "react-router-dom"
import fetchData from "../helpers/fetchData"
import DOMPurify from "dompurify"

const Home = () => {

    const [texts, setTexts] = useState('')

    useEffect(() => {
        const getText = async () => {
            const datas = await fetchData("/content")
            const values = []
            datas.data.forEach(
                text => {
                    values[text.name] = {
                        'id'        : text._id,
                        'title'     : text.title,
                        'content'   : text.tex_fr || text.items
                    }
                }
            )
            setTexts(values)
        }
        getText()
    }, [])

    return (
        <>
            <section className="presentation">
                <Columns number="2" layout="rightBigger" className="section__container">
                        <Column className="presentation__img"></Column>
                        <Column className="presentation__content">
                            <Heading level="primary">
                                {texts['short_presentation']?.title}
                            </Heading>
                            <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(texts['short_presentation']?.content)}}></div>
                            <div className="presentation__links">
                                <Button link="#" type="primary">Call to action 1</Button>
                                <Button link="#" type="secondary">Call to action 2</Button>
                            </div>
                        </Column>
                </Columns>
            </section>
            
            <section className="inspirations">
                <div className="section__container">
                    <Heading level="primary">
                        {texts['inspirations']?.title}
                    </Heading>
                    <Columns number="three" className="inspirations__container">
                        {
                            texts['inspirations'] && texts['inspirations']?.content?.map((content) => (
                                <Column className="inspirations__item" key={content.tex_name}>
                                    <Inspiration title={content.tex_title} image="/img/fantasy.png" altTag="Illustration fantasy">
                                    <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(content.tex_fr)}}></div>
                                    </Inspiration>
                                </Column>
                            ))
                        }
                    </Columns>
                </div>
            </section>

            <section className="socials">
                <div className="section__container">
                    <Heading level="primary">
                        {texts['socials']?.title}
                    </Heading>
                    <div className="socials__subttls">
                        {
                            texts['socials'] && texts['socials']?.content?.map((content) => (
                                <Subheading level="secondary" key={content.tex_key}>{content.tex_fr}</Subheading>
                            ))
                        }
                    </div>
                    <div className="socials__links">
                        <Link to="https://www.instagram.com/manonautrice/" target="_blank"><img src="/img/instagram.png" alt="Logo Instagram" /></Link>
                        <Link to="https://www.tiktok.com/@manon.autrice" target="_blank"><img src="/img/tiktok.png" alt="Logo TikTok" /></Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home