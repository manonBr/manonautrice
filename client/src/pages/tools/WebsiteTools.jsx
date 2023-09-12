import { Heading, Subheading } from "../../features/elements/Headings.features"
import Button from "../../features/forms/button.features"
import "./WebsiteTools.scss"

const WebsiteTools = () => {
    return (
        <div className="WebsiteTools">
            <Heading level="primary">Avoir un site internet : les bonnes pratiques</Heading>
            <div className="websiteTools__img">
                <img src="/img/SVG/website.svg"></img>
            </div>
            <section>
                <div className="container">
                    <p><strong>Ca y est, tu t'es décidé, tu souhaites te créer un site internet ! Comme tout le monde le répètes sans cesse, avoir une plateforme en dehors des réseaux sociaux, une plateforme pour vendre tes romans ou juste pour t'exprimer, c'est important. Seulement, il existe une multitudes de sources d'informations sur le sujet et tu es perdu ! Tu as bien pensé à faire appel aux services d'un profesionnel, mais pour le moment ce n'est pas dans ton budget.</strong></p>
                    <p><strong>Pas de panique ! Je suis là pour te guider, et te donner quelques éléments importants à avoir en tête pour un site internet réussi !</strong></p>
                </div>
                <div className="container">
                    <Subheading>Quels objectifs servent ton site ?</Subheading>
                    <p>Il est important que tu saches pourquoi tu crées ton site. Vas-tu t'en servir comme une sorte de page de présentation de toi et de ton activité ? Va-t-il te servir à vendre tes romans ou seulement à les exposer ? Vas-tu vouloir partager tes réflexions, tes astuces, ..., sous la forme d'un blog ? À quel public t'adresses-tu ?</p>
                    <p>Répondre à ces questions te permettra de mieux définir tes besoins.</p>
                    <p>Tout d'abord, connaître ta cible et le message que tu souhaites véhiculer, te permettra de réfléchir à ton identité visuelle. Sur le web comme ailleurs, on ne s'adresse pas de la même façon à un public jeunesse ou à un public senior.</p>
                    <p>Définir tes objectifs en terme d'activité, te permettra également de sélectionner la meilleure plateforme pour ton besoin. Dans la majorité des cas, Wordpress répondra parfaitement à tes attentes. Avec lui, tu peux te créer un petit site présentation ou un site de blogging. Tu as même la possibilité depuis quelques années de le transformer en site marchand grâce au module WooCommerce. Toutefois, si tu souhaites faire de la vente, je te conseille de te tourner vers des solutions dont c'est la spécialité comme Prestashop ou Shopify, par exemple.</p>
                    <p>Tu peux également combiner les deux solutions, en utilisant Wordpress seulement pour le blogging et une solution de e-commerce pour tout le reste. Les solutions sont nombreuses. Mais avant tout, tu dois savoir précisément ce que tu souhaites !</p>
                </div>
                <div className="container">
                    <Subheading>Attention à l'accesibilité</Subheading>
                    <p>Sur internet, comme ailleurs, il est important de veiller à l'accessibilité de ton site aux personnes en situation de handicap. Cela passe par des gestes simples à mettre en place, mais qui vont tout changer pour une partie de la population.</p>
                    <ul>
                        <li><strong>La navigation au clavier tu intègreras :</strong> Au moment de choisir ton thème, veille à ce que la navigation au clavier soit facilité. Pour le vérifier, tu peux dans un premier temps appuyer sur la touche "tabulation". Si tu visualises avec précision sur quel lien tu te situes, alors, il y a des chances que le site soit navigable facilement.</li>
                        <li><strong>Tes images tu soigneras :</strong> sur n'importe quelle plateforme, en téléchargeant une image, tu as également la possibilité d'ajouter un texte alternatif (balise Alt). Il est important de remplir systèmatiquement cette case. De cette façon, les outils, tels que les synthétiseurs vocaux, liront ce texte afin que la personne malvoyante prenne connaissance de son contenu. Cela te servira également en cas de problèmes de réseaux. Si les images ne s'affichent pas, l'internaute pourra tout de même savoir à quoi correspond ce qu'il ne peut pas charger</li>
                        <li><strong>Point de texte sur tes visuels tu auras :</strong> De la même façon, je te conseille d'éviter de mettre du texte sur une image, ou tout du moins, une information textuelle qui n'est présente nulle par ailleurs. En effet, une personne malvoyante pourrait passer à côté de l'information, surtout si le texte alternatif n'a pas été rempli.</li>
                        <li><strong>Le contraste tu vérifieras :</strong> De la même façon, soigne le contraste de couleurs entre ton texte est le fond sur lequel il repose. Par exemple, un bouton noir avec un texte blanc est parfaitement lisible. En revanche, un bouton bleu clair avec un texte vert sera très difficile à lire pour certaines personnes, même si toi tu y parviens. Il existe sur internet de nombreux outils qui te permettent de tester le niveau de contraste. C'est un petit geste qui change tout !</li>
                    </ul>
                </div>
                <div className="container">
                    <Subheading>Accessible sur tout support</Subheading>
                    <p>De nos jours, nous ne consultons plus uniquement internet de notre ordinateur, mais également de nos smartphones, tablettes, etc. En choisissant le thème de ton site, assure toi également que son affichage en mobile est satisfaisant. Pour ce faire, je t'invite à réduire la taille de la fenêtre de ton navigateur.</p>
                </div>
                <div className="container">
                    <Subheading>Points légaux</Subheading>
                    <p>Un site, comme tout support de communication quel qu'il soit, est soumis à des obligations légales auxquelles tu dois te conformer. Tu dois donc veiller à mettre à disposition de l'internaute  : </p>
                    <ul>
                        <li>Des mentions légales</li>
                        <li>Des Conditions Générales d'Utilisations (CGU)</li>
                        <li>Des mentions RGPD, si tu recueille la moindre information, via des cookies, un formulaire de contact, etc.</li>
                    </ul>
                    <p>Si ton site est un site marchand, tu dois également y ajouter des Conditions Générales de Vente (CGV)</p>
                </div>
                <div className="container">
                    <Subheading>Soigne ton référencement</Subheading>
                    <p>Enfin, une partie à ne pas négliger est le référencement (aussi appelé sous le doux nom de SEO). Le référencement consiste notamment à utiliser dans ton texte des mots-clés qui permettront à Google de comprendre ton contenu et de le situer parmis les meilleurs résultats. Pour en savoir plus, je t'invite à chercher des articles à ce sujet.</p>
                </div>
                <div className="container">
                    <Button type="primary" reloadDocument={true} link="/pdf/site-internet-les-bonnes-pratiques.pdf">Télécharger le récapitulatif</Button>
                </div>
            </section>
        </div>
    )
}

export default WebsiteTools