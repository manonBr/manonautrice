import React from "react"
import { Heading } from "../../features/elements/Headings.features"
import Listing from "../../components/Listing"
import Quote from "../../components/Quote"
import { Link } from "react-router-dom"

const CharactersTools = () => {
    return (
        <>
           <Heading level="primary">
                Créer un roman
            </Heading>
            

            <Listing 
                title="Fiche personnage" 
                img={{url: "/img/fiche-personnage.png", alt_tag: "Image d'aperçu de la fiche d'aide à la création de personnages"}} 
                link="/pdf/fiche-personnage.pdf" 
                level="primary"
                fileDownload={true}
            >
                <p>Un modèle qui regroupe le brainstorming, et une visualisation précises des publications à venir et programmés sur différents réseaux sociaux. Pensé essentiellement pour un usage solo, il s'adapte parfaitement à une petite équipe. Ce modèle se veut simple et très visuel afin de gérer facilement sa présence en ligne sans perdre de temps.</p>
            </Listing>

            <Quote from="John Truby">Bien raconter une histoire, ce n'est pas simplement raconter au public ce qui se passe dans une vie. C'est lui donner l'expérience de cette vie.</Quote>
        </>
    )
}

export default CharactersTools