import React from "react"
import { Heading, Subheading } from "../../features/elements/Headings.features"
import "./NotionTools.scss"
import Listing from "../../components/Listing"
import Quote from "../../components/Quote"

const NotionTools = () => {
    return (
        <>
           <Heading level="primary">
                Templates Notion
            </Heading>

            <Listing 
                title="Gestion de tes réseaux sociaux" 
                img={{url: "/img/socialTemplate.jpg", alt_tag: "Image d'aperçu du template Notion de gestion des réseaux sociaux"}} 
                link="https://www.notion.so/fr-fr/templates/reseaux-sociaux" 
                level="primary"
            >
                <p>Un modèle qui regroupe le brainstorming, et une visualisation précises des publications à venir et programmés sur différents réseaux sociaux. Pensé essentiellement pour un usage solo, il s'adapte parfaitement à une petite équipe. Ce modèle se veut simple et très visuel afin de gérer facilement sa présence en ligne sans perdre de temps.</p>
            </Listing>
            <Listing 
                title="Crée ton roman" 
                img={{url: "/img/socialTemplate.jpg", alt_tag: "Image d'aperçu du template Notion 'Crée ton roman'"}} 
                link="https://www.notion.so/fr-fr/templates/reseaux-sociaux" 
                level="secondary"
                reverse={true}
            >
                <p>Un modèle qui regroupe le brainstorming, et une visualisation précises des publications à venir et programmés sur différents réseaux sociaux. Pensé essentiellement pour un usage solo, il s'adapte parfaitement à une petite équipe. Ce modèle se veut simple et très visuel afin de gérer facilement sa présence en ligne sans perdre de temps.</p>
            </Listing>

            <Quote>Développeuse web, passionnée de technologies et écrivaine à mes heures perdues, j'ai rapidement adopté Notion pour organiser mon quotidien et mes (très) différents projets.</Quote>
        </>
    )
}

export default NotionTools