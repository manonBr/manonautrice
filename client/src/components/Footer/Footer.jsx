import  React, { useEffect, useState } from "react"
import "./Footer.scss"
import fetchData from "../../helpers/fetchData"
import { Link } from "react-router-dom"

const Footer = () => {
    const [text, setText] = useState('')

    useEffect(() => {
        const getText = async () => {
            const datas = await fetchData("/content/footer")
            setText(datas.data)
        }
        getText()
    }, [])

    return (
        <footer>
            <p>
                {text.tex_fr}
            </p>
            <p>
                <Link to="/mentions-legales"> Mentions légales </Link> | 
                <Link to="/politique-confidentialite"> Politique de confidentialité </Link>
            </p>
        </footer>
    )
}

export default Footer