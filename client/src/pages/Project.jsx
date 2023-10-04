import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import fetchData from "../helpers/fetchData";
import { useState } from "react";
import { Heading, Subheading } from "../features/elements/Headings.features";
import { Column, Columns } from "../layouts/Columns.layouts";
import { EnhancedProject } from "../components/Projects.components";
import DOMPurify from "dompurify";
import "./Project.scss"
import Character from "../components/Character.components";

const Project = () => {
    const navigate = useNavigate()

    const [book, setBook] = useState()
    const [content, setContent] = useState()

    const url = useLocation()

    useEffect(() => {
        const getBook = async () => {
            const data = await fetchData('/api' + url.pathname)
            if (!data.data) {
                navigate('/404')
            }
            setBook(data.data)
        }
        getBook()
    }, [])

    useEffect(() => {
        const getText = async () => {
            const data = await fetchData("/api/content/project")
            if (!data.data) {
                navigate('/404')
            }
            setContent(data.data)
        }
        getText()
    }, [])

    return (
        <div className="project">
            
            <section>
                <Heading level="primary">{book?.title}</Heading>
                <EnhancedProject 
                    image={{url:book?.illustration?.url, alt_tag:book?.illustration?.alt_tag}}
                >
                    <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(book?.description)}}></div>
                </EnhancedProject>
            </section>

            <section>
                <Subheading>{content?.characterTitle?.fr}</Subheading>
                <Columns number="three">
                    {
                        book?.characters && book?.characters.map((character) => (
                            <Column className="character" key={character._id}>
                                <Character 
                                    image={{url:character.image.url, alt_tag:character.image.alt_tag}}
                                    name={character.name}   
                                >
                                    <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(character.description)}}></div>
                                </Character>
                            </Column>
                        ))

                    }
                </Columns>
            </section>
            {
                book?.map &&
                    <section>
                        <Subheading>{content?.mapTitle?.fr}</Subheading>
                        <div className="map">
                            <img src={book?.map?.url} alt={book?.map?.alt_tag}></img>
                        </div>
                    </section>
            }
            {
                book?.extract &&
                    <section>
                        <Subheading>{content?.extractTitle?.fr}</Subheading>
                    </section>
            }
        </div>
    )
}

export default Project
