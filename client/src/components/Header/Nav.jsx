import * as React from "react"
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div className="Nav">
            <Link to="/">Qui suis-je ?</Link>
            <Link to="/ressources">Ressources</Link>
            <Link to="/projets">Projets en cours</Link>
            <Link to="https://www.instagram.com/manonautrice/" target="_blank">Instagram</Link>
            <Link to="https://www.tiktok.com/@manon.autrice" target="_blank">TikTok</Link>
        </div>
    )
}

export default Nav