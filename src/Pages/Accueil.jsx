import JumbotronComponent from '../Components/JumbotronComponent';
import img_salle from '../assets/salle.png';
import img_background from '../assets/ground.jpg';
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
                <img 
                    src={img_salle} 
                    alt="visuel de la salle de sport" 
                />
            </div>
        </div>
        <div class="image_background"></div>
        
    </>
}

export default Accueil;