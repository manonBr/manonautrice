import  React, { useEffect, useState } from "react"
import { Heading, Subheading } from "../features/elements/Headings.features"
import fetchData from "../helpers/fetchData"
import DOMPurify from "dompurify"
import { Link } from "react-router-dom"
import LinkItem from "../features/elements/LinkItem"

const Legals = () => {

    const [legals, setLegals] = useState('')

    useEffect(() => {
        const getLegals = async () => {
            const datas = await fetchData("/details")
            setLegals(datas.data[0])
        }
        getLegals()
    }, [])

    return (
        <div className="Legals">
            <Heading level="primary">
                Mentions légales
            </Heading>
            <div className="container">
                <Subheading>1 - Édition du site</Subheading>
                <p>
                    En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet 
                    <LinkItem href="/"> https://www.manonautrice.fr </LinkItem>
                    l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi:</p>
                <p>
                    <strong>Propriétaire du site</strong> : Manon Bruimaud - Contact : manon.bruimaud@gmail.com
                </p>
                <p>
                    <strong>Directeur de la publication</strong> : Manon Bruimaud - Contact : manon.bruimaud@gmail.com.
                </p>
                <p>
                    <strong>Hébergeur</strong> : Hostinger Hostinger International Ltd. 61 Rue Lordou Vironos, 6023 | tel. 0892977093
                </p>
                <p>
                    Délégué à la protection des données : Manon Bruimaud - manon.bruimaud@gmail.com
                </p>
            </div>
            <div className="container">
                <Subheading>2 - Propriété intellectuelle et contrefaçons.</Subheading>

                <p>
                    Manon Bruimaud est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons.
                </p>
                <p>
                    Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Manon Bruimaud.
                </p>
                <p>
                    Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
                </p>
            </div>
            <div className="container">
                <Subheading>3 - Limitations de responsabilité.</Subheading>

                <p>
                    Manon Bruimaud ne pourra être tenu pour responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site 
                    <LinkItem href="/"> https://www.manonautrice.fr</LinkItem>.
                </p>
                <p>
                    Manon Bruimaud décline toute responsabilité quant à l’utilisation qui pourrait être faite des informations et contenus présents sur 
                    <LinkItem href="/"> https://www.manonautrice.fr</LinkItem>.
                </p>
                <p>
                    Manon Bruimaud s’engage à sécuriser au mieux le site 
                    <LinkItem href="/"> https://www.manonautrice.fr</LinkItem>,
                    cependant sa responsabilité ne pourra être mise en cause si des données indésirables sont importées et installées sur son site à son insu.
                </p>
                <p>
                    Des espaces interactifs (espace contact ou commentaires) sont à la disposition des utilisateurs. Manon Bruimaud se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données.
                </p>
                <p>
                    Le cas échéant, Manon Bruimaud se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie …).
                </p>
            </div>
            <div className="container">
                <Subheading>4 - CNIL et gestion des données personnelles.</Subheading>

                <p>Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée, l’utilisateur du site <LinkItem href="/"> https://www.manonautrice.fr </LinkItem> dispose d’un droit d’accès, de modification et de suppression des informations collectées. Pour exercer ce droit, envoyez un message à notre Délégué à la Protection des Données : Manon Bruimaud - manon.bruimaud@gmail.com.</p>

                <p>Pour plus d'informations sur la façon dont nous traitons vos données (type de données, finalité, destinataire...), lisez notre <LinkItem href="/"> https://www.manonautrice.fr </LinkItem>/politique-confidentialite.</p>
            </div>
            <div className="container">
                <Subheading>5 - Liens hypertextes et cookies</Subheading>
                <p>Le site <LinkItem href="/"> https://www.manonautrice.fr </LinkItem> contient des liens hypertextes vers d’autres sites et dégage toute responsabilité à propos de ces liens externes ou des liens créés par d’autres sites vers <LinkItem href="/"> https://www.manonautrice.fr </LinkItem>.</p>

                <p>La navigation sur le site <LinkItem href="/"> https://www.manonautrice.fr </LinkItem> est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur.</p>

                <p>Un "cookie" est un fichier de petite taille qui enregistre des informations relatives à la navigation d’un utilisateur sur un site. Les données ainsi obtenues permettent d'obtenir des mesures de fréquentation, par exemple.</p>

                <p>Vous avez la possibilité d’accepter ou de refuser les cookies en modifiant les paramètres de votre navigateur. Aucun cookie ne sera déposé sans votre consentement.</p>

                <p>Les cookies sont enregistrés pour une durée maximale de 1 mois.</p>

                <p>Pour plus d'informations sur la façon dont nous faisons usage des cookies, lisez notre <LinkItem href="/politique-confidentialite"> https://www.manonautrice.fr/politique-confidentialite</LinkItem>.</p>
            </div>
            <div className="container">
                <Subheading>6 - Droit applicable et attribution de juridiction.</Subheading>
                <p>Tout litige en relation avec l’utilisation du site <LinkItem href="/"> https://www.manonautrice.fr </LinkItem> est soumis au droit français.</p>
            </div>


        </div>
    )
}

export default Legals