import  React, { useEffect, useState } from "react"
import "./Footer.scss"
import fetchData from "../../helpers/fetchData"
import LinkItem from "../../features/elements/LinkItem"
import Instagram from "../Instagram.components"

const Footer = () => {
    const [text, setText] = useState('')

    useEffect(() => {
        const getText = async () => {
            const datas = await fetchData("/api/content/footer")
            setText(datas.data)
        }
        getText()
    }, [])

    return (
        <>
            {/* <Instagram/> */}
            <footer>
                <p>
                    {text.tex_fr} | 
                    <LinkItem to="/mentions-legales"> Mentions légales </LinkItem> | 
                    <LinkItem to="/politique-confidentialite"> Politique de confidentialité </LinkItem>
                </p>
            </footer>
        </>
    )
}

export default Footer