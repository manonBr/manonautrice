import React, { useRef, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useMobileSize } from "../../hooks/useScreenSize"
import "./Nav.scss"

const Nav = () => {
    const hamburgerMenuIcon = useRef()
    const menu = useRef()
    const menuLinkWithChildren = useRef()
    const subMenu = useRef()
    
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
    const isMobile = useMobileSize()

    useEffect(() => {
        window.addEventListener('mousedown', closeSubMenu)
        return () => {
            window.removeEventListener('mousedown', closeSubMenu)
        }
    }, [isSubMenuOpen])
    
    const closeMenuHamburger = () => {
        menu.current.classList.add('s-hidden')
        hamburgerMenuIcon.current.checked = false
        setIsMenuOpen(false)
    }

    const closeSubMenu = (e) => {
        if(
            subMenu.current && isSubMenuOpen
            && subMenu.current.classList.contains("visible")
            && !subMenu.current.contains(e.target) 
            && e.target !== menuLinkWithChildren.current
        ){
            subMenu.current.classList.remove('visible')
            setIsSubMenuOpen(false)
        }
    } 
    
    const handleClickMenuHamburger = () => {
        if(isMenuOpen) {
            closeMenuHamburger()
        } else {
            menu.current.classList.remove('s-hidden')
            setIsMenuOpen(true)
        }
    }
    const handleClickMenuItemWithChildren = (e) => {
        e.preventDefault()
        if (subMenu.current.classList.contains("visible")) {
            subMenu.current.classList.remove('visible')
            setIsSubMenuOpen(false)
        } else {
            subMenu.current.classList.add('visible')
            setIsSubMenuOpen(true)
        }
    }

    return (
        <div className="menu">
            <input type="checkbox" id="menu__hamburger"  onClick={handleClickMenuHamburger} ref={hamburgerMenuIcon}/>
            <label htmlFor="menu__hamburger" aria-label="Accès menu mobile">
                <span></span>
                <span></span>
                <span></span>
            </label>
            <div className="menu__container s-hidden loadHome" data-appear="1500" ref={menu}>
                <ul>
                    <li className="menu__item"><Link to="/"  onClick={isMobile ? closeMenuHamburger : undefined}>Qui suis-je ?</Link></li>
                    <li className="menu__item menu__item--hasChildren" onClick={handleClickMenuItemWithChildren}>
                        <a href="#" ref={menuLinkWithChildren}>Ressources</a>
                        <ul ref={subMenu}>
                            <li className="menu__subitem"><Link to="/ressources/templates-notion" onClick={isMobile ? closeMenuHamburger : undefined}>Templates Notion</Link></li>
                            <li className="menu__subitem"><Link to="/ressources/fiches-personnages" onClick={isMobile ? closeMenuHamburger : undefined}>Fiches personnages</Link></li>
                            <li className="menu__subitem"><Link to="/ressources/site-internet" onClick={isMobile ? closeMenuHamburger : undefined}>Site internet : bonnes pratiques</Link></li>
                        </ul>
                    </li>
                    <li className="menu__item"><Link to="/projets" onClick={isMobile ? closeMenuHamburger : undefined}>Projets en cours</Link></li>
                    <li className="menu__item"><Link to="https://www.instagram.com/manonautrice/" target="_blank">Instagram</Link></li>
                    <li className="menu__item"><Link to="https://www.tiktok.com/@manon.autrice" target="_blank">TikTok</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav