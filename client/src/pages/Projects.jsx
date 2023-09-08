import React, { useState } from "react"
import { Heading } from "../features/elements/Headings.features"
import { EnhancedProject, MinimalistProject } from "../components/Projects.components"
import { useEffect } from "react"
import fetchData from "../helpers/fetchData"
import DOMPurify from "dompurify"

const Projects = () => {
    const [currentBook, setCurrentBook] = useState()
    const [futurBooks, setFuturBooks] = useState([])
    const [content, setContent] = useState()

    useEffect(() => {
        const getBooks = async () => {
            const datas = await fetchData('/books')
            const values = []
            const books = []
            datas.data.forEach(
                book => {
                    values[book.name] = {
                        'id'        : book._id,
                        'title'     : book.title,
                        'name'      : book.name,
                        'illustration': book.illustration,
                        'pitch'     : book.description,
                        'genre'     : book.genres,
                        'current'   : book.current,
                        'finish'    : book.finish
                    }
                }
            )
            Object.values(values).map((item) => {
                if(item.current && !item.finish) {
                    setCurrentBook(item)
                }
                if(!item.current && !item.finish) {
                    books.push(item)
                }
            })
            setFuturBooks(books)
        }
        getBooks()
    }, [])

    useEffect(() => {
        const getText = async () => {
            const data = await fetchData("/content/projects")
            if (!data.data) {
                navigate('/404')
            }
            setContent(data.data)
        }
        getText()
    }, [])

    return (
        <div className="Projects">
            <section>
                <Heading level="primary">{content?.currentTitle?.fr}</Heading>
                <EnhancedProject 
                    image={{url:currentBook?.illustration?.url, alt_tag:currentBook?.illustration?.alt_tag}}
                    title= {currentBook?.title}
                    link={`/projets/${currentBook?.name}`}
                >
                    <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(currentBook?.pitch)}}></div>
                </EnhancedProject>
            </section>
            <section>
                <Heading level="primary">{content?.futureTitle?.fr}</Heading>
                <div style={{marginBottom: "2rem", fontStyle: "italic"}}>
                    <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(content?.futurePreamble?.fr)}}></div>
                </div>
                {
                    futurBooks?.map((book)=>(
                        <MinimalistProject
                            key={book.id}
                            title={book.title}
                            genre={book.genre}
                        >
                            <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(book.pitch)}}></div>
                        </MinimalistProject>
                    ))
                }
            </section>
        </div>
    )
}

export default Projects