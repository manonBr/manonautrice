import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Nav from "./Nav"
import "./Header.scss"
import fetchData from "../../helpers/fetchData"
import LinkItem from "../../features/elements/LinkItem"

const Header = () => {

    const [images, setImages] = useState('')
    
    useEffect(() => {
        const elements = document.querySelectorAll('.loadHome')
        const timers = []

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

        elements.forEach(element => {
            const timer = setTimeout(() => {
                element.classList.remove('loadHome')
            }, element.dataset.appear)

            timers.push(timer)
            
        })
        return () => clearTimeout(timers)
    }, [])

    return (
        <header>
            <LinkItem to="/" className="logo loadHome"  data-appear="1000">
                <img src={images["logoLight"]?.url} alt={images["logoLight"]?.alt_tag} className="logo__img logo__img--light" />
                <img src={images["logoDark"]?.url} alt={images["logoDark"]?.alt_tag} className="logo__img logo__img--dark" />
            </LinkItem>
            <Nav></Nav>
        </header>

    )
}

export default Header