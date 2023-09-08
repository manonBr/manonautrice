import React, { useRef, useState, useEffect } from "react"
import { useMobileSize } from "../../hooks/useScreenSize"
import "./Nav.scss"
import LinkItem from "../../features/elements/LinkItem"
import fetchData from "../../helpers/fetchData"
import { useNavigate } from "react-router-dom"

const Nav = () => {
    const hamburgerMenuIcon = useRef()
    const menu = useRef()
    const menuLinkWithChildren = useRef()
    const subMenu = useRef()
    
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
    const isMobile = useMobileSize()
    const [tools, setTools] = useState()

    const navigate = useNavigate()

    useEffect(() => {
        window.addEventListener('mousedown', closeSubMenu)
        return () => {
            window.removeEventListener('mousedown', closeSubMenu)
        }
    }, [isSubMenuOpen])

    useEffect(() => {
        fetchData
        const getTools = async () => {
            const data = await fetchData("/ressources")
            if (!data.data) {
                navigate('/404')
            }
            setTools(data.data)
        }
        getTools()
    }, [])
    
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
                    <li className="menu__item"><LinkItem to="/"  onClick={isMobile ? closeMenuHamburger : undefined}>Qui suis-je ?</LinkItem></li>
                    <li className="menu__item menu__item--hasChildren" onClick={handleClickMenuItemWithChildren}>
                        <LinkItem href="#" refs={menuLinkWithChildren}>Ressources</LinkItem>
                        <ul ref={subMenu}>
                            {
                                tools && tools?.map((tool) => (
                                    <li className="menu__subitem"><LinkItem to={`/ressources/${tool.name}`} onClick={isMobile ? closeMenuHamburger : undefined}>{tool.title}</LinkItem></li>
                                ))
                            }
                                {/* <li className="menu__subitem"><LinkItem to="/ressources/templates-notion" onClick={isMobile ? closeMenuHamburger : undefined}>Templates Notion</LinkItem></li>
                            <li className="menu__subitem"><LinkItem to="/ressources/creer-un-roman" onClick={isMobile ? closeMenuHamburger : undefined}>Outils : Crée ton roman</LinkItem></li> */}
                            <li className="menu__subitem"><LinkItem to="/ressources/site-internet" onClick={isMobile ? closeMenuHamburger : undefined}>Site internet : bonnes pratiques</LinkItem></li>
                        </ul>
                    </li>
                    <li className="menu__item"><LinkItem to="/projets" onClick={isMobile ? closeMenuHamburger : undefined}>Projets en cours</LinkItem></li>
                    <li className="menu__item"><LinkItem to="https://www.instagram.com/manonautrice/" target="_blank">Instagram</LinkItem></li>
                    <li className="menu__item"><LinkItem to="https://www.tiktok.com/@manon.autrice" target="_blank">TikTok</LinkItem></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav