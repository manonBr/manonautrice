import React, { useEffect, useState } from "react"
import { Heading } from "../../features/elements/Headings.features"
import Listing from "../../components/Listing"
import Quote from "../../components/Quote"
import { useLocation, useNavigate } from "react-router-dom"
import fetchData from "../../helpers/fetchData"
import DOMPurify from "dompurify"

const Tools = () => {

    const [tools, setTools] = useState()
    const [content, setContent] = useState()
    const url = useLocation()
    const page = url.pathname.split("/")[2]

    const navigate = useNavigate()

    useEffect(() => {
        const getTools = async () => {
            const data = await fetchData(url.pathname)
            if (!data.data) {
                navigate('/404')
            }
            setTools(data.data.tools)
        }
        getTools()
    }, [url])
    useEffect(() => {
        const getContent = async () => {
            const data = await fetchData(`/content/${page}`)
            if (!data.data) {
                navigate('/404')
            }
            setContent(data.data)
        }
        getContent()
    }, [url])


    return (
        <>
           <Heading level="primary">
                {content?.page_title?.fr}
            </Heading>

            {
                tools && tools.map((tool) => {
                    if (tools.indexOf(tool) % 2 === 0) {
                        return (
                            <Listing 
                                title={tool.title} 
                                img={{url: tool.image.url, alt_tag: tool.image.alt_tag}} 
                                link={tool.link} 
                                level="primary"
                                key={tool._id}
                                >
                                <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(tool.description)}}></div>
                            </Listing>
                        )
                    } else {
                        return (
                            <Listing 
                                title={tool.title} 
                                img={{url: tool.image.url, alt_tag: tool.image.alt_tag}} 
                                link={tool.link} 
                                level="secondary"
                                reverse={true}
                                key={tool._id}
                            >
                                <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(tool.description)}}></div>
                            </Listing>
                        )
                    }
                })
            }

            {content?.quote?.from ? (
                <Quote from={content?.quote?.from}>{content?.quote?.text}</Quote>
            ) : (
                <Quote>{content?.quote?.text}</Quote>
            )}
        </>
    )
}

export default Tools