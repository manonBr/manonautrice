import * as React from "react"
import { Link } from "react-router-dom"
import Nav from "./Nav"
import "./Header.css"

const Header = () => {
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