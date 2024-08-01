import JumbotronComponent from '../Components/JumbotronComponent';
import img_salle from '../assets/images/salle.png';
import img_agenda from '../assets/icones/agenda.png';
import img_stats from '../assets/icones/stats.png';
import img_thematique from '../assets/icones/thematique.png';
import img_mma from '../assets/icones/mma.png';
import '../styles/accueil.css';



function Accueil () {

    return <>
        <JumbotronComponent />
        <div class="section_volonte">
            <div class="description_volonte">
                <h1>Notre volonté</h1>
                <p>Nous visons à changer les perceptions des sports de combat en offrant un cadre sécuritaire, axé sur la pédagogie et la didactique. Nous proposons des sessions combinant différents sports de combat pour rechercher l'efficience. Nos méthodes d'apprentissage reposent sur la littérature scientifique pour optimiser votre progression.</p>
            </div>
            <div class="image_volonte">
                <img src={img_salle} alt="visuel de la salle de sport" />
            </div>
        </div>
        <div className="image_background"></div>
        <div className="section_concept">
            <h1>Un concept exclusif et unique</h1>
            <div className="concept_container">
                <div className="concept_box">
                    <div className="concept_image"><img src= {img_agenda} alt="icone d'un agenda" /></div>
                    <h4>Venez quand vous <br /> voulez</h4>
                    <p>Ouvert 6j/7 <br /> 10h00 à 20h00</p>
                </div>
                <div className="concept_box">
                    <div className="concept_image"><img src={img_stats} alt="icone d'une courbe" /></div>
                    <h4>Prise en charge 100% personnalisée</h4>
                    <p>Testing et individualisation en fonction de vos besoins</p>
                </div>
                <div className="concept_box">
                    <div className="concept_image"><img src={img_thematique} alt="icone thématique" /></div>
                    <h4>Des thématiques <br /> uniques</h4>
                    <p>Conceptualisation et réflexion autour de la pratique</p>
                </div>
                <div className="concept_box">
                    <div className="concept_image"><img src={img_mma} alt="icone d'un gant de mma" /></div>
                    <h4>Inclus la location des protections</h4>
                    <p>Fini les oublis de gants de boxe, MMA et protèges tibias</p>
                </div>
            </div>
             

        </div>




    </>
}

export default Accueil;