import * as React from "react"
import { Link } from "react-router-dom"
import Nav from "./Nav"
import "./Header.scss"
import { delayBeforeApparition } from "../../helpers/apparition.helpers"
import { useEffect } from "react"

const Header = () => {
    
    useEffect(() => {
        const elements = document.querySelectorAll('.loadHome')
        const timers = []

        elements.forEach(element => {
            console.log(element.dataset.appear)
            const timer = setTimeout(() => {
                element.classList.remove('loadHome')
                console.log(element)
            }, element.dataset.appear)

            timers.push(timer)
            
        })
        return () => clearTimeout(timers)
    }, [])
    return (
        <header>
            <Link to="/" className="logo loadHome"  data-appear="1000">
                <img src="/img/logo--light.svg" alt="Logo : Manon, autrice de SFFF" className="logo__img logo__img--light" />
                <img src="/img/logo--dark.svg" alt="Logo : Manon, autrice de SFFF" className="logo__img logo__img--dark" />
            </Link>
            <Nav></Nav>
        </header>

    )
}

export default Header