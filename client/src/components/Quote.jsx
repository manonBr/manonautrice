import React from "react"
import "./Quote.scss"

const Quote = ({children}) => {
    return (
        <section className="quotation">
            <p><span className="quotation__mark quotation__mark--left">«</span>{children}<span className="quotation__mark quotation__mark--right">»</span></p>
        </section>
    )
}

export default Quote