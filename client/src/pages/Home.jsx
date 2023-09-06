import React, { useEffect, useRef, useState } from "react"
import "./Home.scss"
import { Column, Columns } from "../layouts/Columns.layouts"
import { Heading, Subheading } from "../features/elements/Headings.features"
import Button from "../features/forms/button.features"
import Inspiration from "../components/Inspiration.features"
import fetchData from "../helpers/fetchData"
import DOMPurify from "dompurify"
import LinkItem from "../features/elements/LinkItem"
import Sketch from "../features/elements/Sketch"


const Home = () => {
    
    const [texts, setTexts] = useState('')
    const [images, setImages] = useState('')

    const presentation = useRef()
    const inspirations = useRef()
    const socials = useRef()
    
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

    useEffect(()=> {
        const getImages = async () => {
            const datas = await fetchData("/images")
            const values = []
            datas.data.forEach(
                image => {
                    values[image.name] = {
                        'id'        : image._id,
                        'url'     : image.url,
                        'alt_tag'   : image.alt_tag
                    }
                }
            )
            setImages(values)
        }
        getImages()
    }, [])
    
    useEffect(()=> {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach((entry) => {
                    if(entry.isIntersecting){
                        entry.target.classList.add('reveal--visible')
                        observer.unobserve(entry.target)
                    }
                })
            },
            { root: null, rootMargin: "0px", threshold: 0.5 }
        )
        observer.observe(presentation.current)
        observer.observe(inspirations.current)
        observer.observe(socials.current)

        return () => observer.disconnect()
    }, [])
    
    return (
        <>
            <section className="presentation reveal" ref={presentation}>
                <Columns number="two" layout="rightBigger" className="section__container">
                        <Column className="presentation__img"></Column>
                        <Column className="presentation__content">
                            <Heading level="primary">
                                {texts['short_presentation']?.title}
                            </Heading>
                            <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(texts['short_presentation']?.content)}}></div>
                            <div className="presentation__links">
                                <Button link="#" type="primary">Mon projet chouchou</Button>
                                <Button link="/ressources/templates-notion" type="secondary">Mes templates Notion</Button>
                            </div>
                        </Column>
                </Columns>
            </section>
            
            <section className="inspirations reveal" ref={inspirations}>
                <div className="section__container">
                    <Heading level="primary">
                        {texts['inspirations']?.title}
                    </Heading>
                    <Columns number="three" className="inspirations__container">
                        {
                            texts['inspirations'] && texts['inspirations']?.content?.map((content) => (
                                <Column className="inspirations__item" key={content.tex_name}>
                                    <Inspiration title={content.tex_title} image={images[content.tex_name]?.url} altTag={images[content.tex_name]?.alt_tag}>
                                        <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(content.tex_fr)}}></div>
                                    </Inspiration>
                                </Column>
                            ))
                        }
                    </Columns>
                </div>
            </section>

            <section className="socials reveal" ref={socials}>
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
                        <LinkItem to="https://www.instagram.com/manonautrice/" target="_blank"><img src={images['instagram']?.url} alt={images['instagram']?.alt_tag} /></LinkItem>
                        <LinkItem to="https://www.tiktok.com/@manon.autrice" target="_blank"><img src={images['tiktok']?.url} alt={images['tiktok']?.url} /></LinkItem>
                    </div>
                </div>
            </section>
            <Sketch></Sketch>
            
        </>
    )
}

export default Home