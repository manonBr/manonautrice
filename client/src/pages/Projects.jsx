import React from "react"
import { Heading, Subheading } from "../features/elements/Headings.features"
import { MainProject, SecondaryProject } from "../components/Projects.components"

const Projects = () => {
    return (
        <div className="Projects">
            <section>
                <Heading level="primary">Mon projet du moment</Heading>
                <MainProject 
                    image={{url:"/img/lsdw-cover.jpeg", alt:"Photo illustrant la relation conflictuelle entre Éléonore et ses pouvoirs"}}
                    title= "Le souffle de Wyrd"
                    link="/projets/lesouffledewyrd"
                >
                    <p>Sur Limniskos, les elfes se démènent pour trouver une solution à l’instabilité du flux magique qui menace leur existence. Leur solution ? Éléonore, étudiante en marketing vivant dans le monde sans magie et hantée par de vieux démons qui la tuent à petit feu.</p>
                    <p>Kidnappée et propulsée au milieu de ce monde inconnu, la jeune fille va devoir lutter pour sa survie et choisir son camps. Doit-elle aider ce peuple ? Les pixies accusées de tous leurs maux sont-ils aussi malfaisants qu’ils le prétendent ?</p>
                </MainProject>
            </section>
            <section>
                <Heading level="primary">Mes futurs projets</Heading>
                <div style={{marginBottom: "2rem", fontStyle: "italic"}}>
                    <p>Ces projets n'ent sont encore qu'au stade d'idée. Les titres sont donc bien évidemment provisoires et les résumés parfois incomplets.</p>
                </div>
                <SecondaryProject
                    title="Silence"
                    genre="Dystopie"
                >
                    <p>Et si tu vivais dans un monde où toute les libertés sont anéanties, où les plus riches dissimulent leur visage d'un masque pour le protéger du regard du peuple ? Et si dans ce monde toute forme d'art était interdite ? Et si tu étais le fils du dirigeant..., mais également musicien ?</p>
                </SecondaryProject>
                <SecondaryProject
                    title="Les fils du destin"
                    genre="Urban fantasy"
                >
                    <p>3 familles, 3 histoires à raconter qui s'entremêlent dans un contexte difficile. </p>
                    <p>Thèmes abordés : infertilité, grossesses arrétées, familles déchirées, deuil</p>
                </SecondaryProject>
                <SecondaryProject
                    title="Illusion"
                    genre="Fantastique"
                >
                    <p>Et si cette maison au coin de la rue n'était pas une simple maison ? Et si tout un monde surnaturelle y résidait ? Et si tous ses rires n'étaient pas ceux d'un enfant ? Ou peut-être que si finalement. Après tout, tout cela n'est peut-être qu'une illusion.</p>
                </SecondaryProject>
                <SecondaryProject
                    title="Pour toi"
                    genre="Romance"
                >
                    <p>Alors qu'une jeune princesse vient de se marier à l'héritier du royaume voisin, la guerre éclate au porte du royaume de son père. Tandis que son époux conduit l'armée pour défendre sa famille, elle décide de l'accompagner malgré ses réticences. Sur leur chemin, la mort ne sera pas le seul obstacle qui les mettra en difficulté.</p>
                </SecondaryProject>
            </section>
            
           {/* <p>Projects</p>


           Mon projet en cours<br/>

           Pitch

           Personnages 

           Carte

           Extrait (X premières pages) */}
        </div>
    )
}

export default Projects