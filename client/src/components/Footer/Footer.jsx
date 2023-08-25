import  React, { useEffect, useState } from "react"
import "./Footer.scss"
import fetchData from "../../helpers/fetchData"

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
            <span>
                {text.tex_fr}
            </span>
        </footer>
    )
}

export default Footer