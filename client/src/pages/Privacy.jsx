import  React, { useEffect, useState } from "react"
import { Heading, Subheading } from "../features/elements/Headings.features"
import "./Privacy.scss"

const Privacy = () => {
    return (
        <div className="Privacy">
            <Heading level="primary">Politique de confidentialité</Heading>
	        <p>Cette politique de confidentialité fonctionne conjointement aux conditions générales d’utilisation de notre site.</p>
            <div className="container">
                <Subheading>Lois applicables</Subheading>
                <p>Conformément au <em>Règlement général sur la protection des données</em> (RGPD), les données à caractère personnel doivent être :</p>
                <ol>
                    <li>traitées de manière licite, loyale et transparente au regard de la personne concernée (licéité, loyauté, transparence) ;</li>
                    <li>collectées pour des finalités déterminées, explicites et légitimes, et ne pas être traitées ultérieurement d'une manière incompatible avec ces finalités; le traitement ultérieur à des fins archivistiques dans l'intérêt public, à des fins de recherche scientifique ou historique ou à des fins statistiques n'est pas considéré, conformément à l'article 89, paragraphe 1, comme incompatible avec les finalités initiales (limitation des finalités) ;</li>
                    <li>adéquates, pertinentes et limitées à ce qui est nécessaire au regard des finalités pour lesquelles elles sont traitées (minimisation des données) ;</li>
                    <li>exactes et, si nécessaire, tenues à jour; toutes les mesures raisonnables doivent être prises pour que les données à caractère personnel qui sont inexactes, eu égard aux finalités pour lesquelles elles sont traitées, soient effacées ou rectifiées sans tarder (exactitude) ;</li>
                    <li>conservées sous une forme permettant l'identification des personnes concernées pendant une durée n'excédant pas celle nécessaire au regard des finalités pour lesquelles elles sont traitées; les données à caractère personnel peuvent être conservées pour des durées plus longues dans la mesure où elles seront traitées exclusivement à des fins archivistiques dans l'intérêt public, à des fins de recherche scientifique ou historique ou à des fins statistiques conformément à l'article 89, paragraphe 1, pour autant que soient mises en œuvre les mesures techniques et organisationnelles appropriées requises par le règlement afin de garantir les droits et libertés de la personne concernée (limitation de la conservation) ;</li>
                    <li>traitées de façon à garantir une sécurité appropriée des données à caractère personnel, y compris la protection contre le traitement non autorisé ou illicite et contre la perte, la destruction ou les dégâts d'origine accidentelle, à l'aide de mesures techniques ou organisationnelles appropriées (intégrité et confidentialité).</li>
                </ol><br/>
	            <p>Le traitement n'est licite que si, et dans la mesure où, au moins une des conditions suivantes est remplie :</p>
                <ol>
                    <li>la personne concernée a consenti au traitement de ses données à caractère personnel pour une ou plusieurs finalités spécifiques ;</li>
                    <li>le traitement est nécessaire à l'exécution d'un contrat auquel la personne concernée est partie ou à l'exécution de mesures précontractuelles prises à la demande de celle-ci ;</li>
                    <li>le traitement est nécessaire au respect d'une obligation légale à laquelle le responsable du traitement est soumis ;</li>
                    <li>le traitement est nécessaire à la sauvegarde des intérêts vitaux de la personne concernée ou d'une autre personne physique ;</li>
                    <li>le traitement est nécessaire à l'exécution d'une mission d'intérêt public ou relevant de l'exercice de l'autorité publique dont est investi le responsable du traitement ;</li>
                    <li>le traitement est nécessaire aux fins des intérêts légitimes poursuivis par le responsable du traitement ou par un tiers, à moins que ne prévalent les intérêts ou les libertés et droits fondamentaux de la personne concernée qui exigent une protection des données à caractère personnel, notamment lorsque la personne concernée est un enfant.</li>
                </ol>
            </div>
            <div className="container">
                <Subheading>Consentement</Subheading>
                <p>Les utilisateurs conviennent qu’en utilisant notre site, ils consentent aux conditions énoncées dans la présente politique de confidentialité et à la collecte, à l’utilisation et à la conservation des données énumérées dans la présente politique.</p>
            </div>
            <div className="container">
                <Subheading>Données personnelles que nous collectons</Subheading>
                <p><strong>Données collectées automatiquement</strong></p>
                <p>Nous ne collectons aucune donnée automatiquement sur notre site.</p>
                <p><strong>Données recueillies de façon non automatique</strong></p>
                <p>Nous pouvons également collecter les données suivantes lorsque vous effectuez certaines fonctions sur notre site :</p>
                <ol>
                    <li>Prénom et nom</li>
                    <li>Email</li>
                </ol>
                <p>Ces données peuvent être recueillies au moyen de notre formulaire de contact.</p>
                <p>Veuillez noter que nous ne collectons que les données qui nous aident à atteindre l’objectif énoncé dans cette politique de confidentialité. Nous ne recueillerons pas de données supplémentaires sans vous en informer au préalable.
                </p>
            </div>
            <div className="container">
                <Subheading>Comment nous utilisons les données personnelles</Subheading>
                <p>Les données personnelles recueillies sur notre site seront utilisées uniquement aux fins précisées dans la présente politique ou indiquées sur les pages pertinentes de notre site. Nous n’utiliserons pas vos données au-delà de ce que nous divulguerons.</p>
                <p>Les données que nous recueillons lorsque l’utilisateur exécute certaines fonctions peuvent être utilisées à des fins de communication.</p>
            </div>
            <div className="container">
                <Subheading>Partage des données personnelles</Subheading>
                <p>Nous nous engageons à ne pas vendre ou partager vos données avec des tiers, sauf dans les cas suivants :</p>
                <ol>
                    <li>si la loi l'exige</li>
                    <li>si elle est requise pour toute procédure judiciaire</li>
                    <li>pour prouver ou protéger nos droits légaux</li>
                </ol>
                <p>Si vous suivez des hyperliens de notre site vers un autre site, veuillez noter que nous ne sommes pas responsables et n’avons pas de contrôle sur leurs politiques et pratiques de confidentialité.</p>
            </div>
            <div className="container">
                <Subheading>Protection des données</Subheading>
                <p>Alors que nous prenons toutes les précautions raisonnables pour nous assurer que nos données d’utilisateur sont sécurisées et que les utilisateurs sont protégés, il reste toujours du risque de préjudice. L’Internet en sa totalité peut être, parfois, peu sûr et donc nous sommes incapables de garantir la sécurité des données des utilisateurs au-delà de ce qui est raisonnablement pratique.</p>
            </div>
            <div className="container">
                <Subheading>Modification, Suppression, contestation des données recueillies</Subheading>
                <p>En vertu du RGPD, les utilisateurs ont les droits suivants en tant que personnes concernées :</p>
                <ol>
                    <li>droit d’accès</li>
                    <li>droit de rectification</li>
                    <li>droit à l’effacement</li>
                    <li>droit de restreindre le traitement</li>
                    <li>droit à la portabilité des données</li>
                    <li>droit d'objection</li>
                </ol>
                <p>Si vous souhaitez que vos renseignements soient supprimés ou modifiés d’une façon ou d’une autre, veuillez nous contacter à cette adresse mail :</p>
	            <p>Manon Bruimaud<br />manon.bruimaud@gmail.com</p>
            </div>
            <div className="container">
                <Subheading>Politique sur les cookies</Subheading>
                <p>Un cookie est un petit fichier, stocké sur le disque dur d’un utilisateur par le site Web. Son but est de recueillir des données relatives aux habitudes de navigation de l’utilisateur.</p>
                <p>Sur notre site, nous utilisons les types de cookies suivants :</p>
                <ol>
                    <li><strong>Cookie d'affichage :</strong>Ces cookies mémorisent vos préférences d'affichage tel que le thème sombre ou le thème clair.</li>
                </ol>
                <p>Vous pouvez choisir d’être averti chaque fois qu’un cookie est transmis. Vous pouvez également choisir de désactiver les cookies entièrement dans votre navigateur Internet, mais cela peut diminuer la qualité de votre expérience d’utilisation.</p>
            </div>
            <div className="container">
                <Subheading>Modifications</Subheading>
                <p>Cette politique de confidentialité peut être modifiée à l’occasion afin de maintenir la conformité avec la loi et de tenir compte de tout changement à notre processus de collecte de données. Nous recommandons à nos utilisateurs de vérifier notre politique de temps à autre pour s’assurer qu’ils soient informés de toute mise à jour. Au besoin, nous pouvons informer les utilisateurs par courriel des changements apportés à cette politique.</p>
            </div>
            <div className="container">
                <Subheading>Contact</Subheading>
                <p>Si vous avez des questions à nous poser, n’hésitez pas à communiquer avec nous en utilisant ce qui suit :<br />manon.bruimaud@gmail.com</p>
            </div>
        </div>
    )
}

export default Privacy