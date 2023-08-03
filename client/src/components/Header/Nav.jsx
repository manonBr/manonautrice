import * as React from "react"
import { Link } from "react-router-dom"
import "./Nav.css"

const Nav = () => {

    const handleMenuHamburgerClick = (e) => {
        const checked = e.target.checked
        if(checked) {
            document.querySelector('.menu__container').classList.remove('s-hidden')
        } else {
            document.querySelector('.menu__container').classList.add('s-hidden')
        }
    }
    const handleMenuItemWithChildrenClick = (e) => {
        const itemLink = e.target
        const item = e.target.parentElement
        const submenu = itemLink.nextElementSibling
        const itemClassList = e.target.parentElement.classList
        console.log(item.nextElementSibling)
        if (submenu.classList.contains("visible")) {
            submenu.classList.remove('visible')
        } else {
            submenu.classList.add('visible')
        }
    }

    // document.querySelector('.menu__item--hasChildren a').addEventListener('click', (e) => {
    //     e.preventDefault()
    //     e.target.nextElementSibling.classList.toggle('visible')
    //     e.target.classList.toggle('primary')
    // })
    // document.addEventListener('click', (e) => {
    //     const activeSubMenu = document.querySelector('.menu__item--hasChildren ul.visible')
    //     if(e.target.closest('.menu__container')){
    //         return
    //     }
    //     if (activeSubMenu) {
    //         activeSubMenu.previousElementSibling.click()
    //     }
    // })
    return (
        <div className="menu">
            <input type="checkbox" id="menu__hamburger" onClick={handleMenuHamburgerClick} />
            <label htmlFor="menu__hamburger" aria-label="Accès menu mobile">
                <span></span>
                <span></span>
                <span></span>
            </label>
            <div className="menu__container s-hidden loadHome" data-appear="1500">
                <ul>
                    <li className="menu__item"><Link to="/">Qui suis-je ?</Link></li>
                    <li className="menu__item menu__item--hasChildren" onClick={handleMenuItemWithChildrenClick}>
                        <Link to="/ressources">Ressources</Link>
                        <ul>
                            <li className="menu__subitem"><Link to="/">Templates Notion</Link></li>
                            <li className="menu__subitem"><Link to="/">Fiches personnages</Link></li>
                            <li className="menu__subitem"><Link to="/">Site internet : bonnes pratiques</Link></li>
                        </ul>
                    </li>
                    <li className="menu__item"><Link to="/projets">Projets en cours</Link></li>
                    <li className="menu__item"><Link to="https://www.instagram.com/manonautrice/" target="_blank">Instagram</Link></li>
                    <li className="menu__item"><Link to="https://www.tiktok.com/@manon.autrice" target="_blank">TikTok</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav