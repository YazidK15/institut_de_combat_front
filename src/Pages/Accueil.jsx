import '../styles/accueil.css';
import JumbotronComponent from '../Components/JumbotronComponent';
import img_salle from '../assets/images/salle.png';
import img_agenda from '../assets/icones/agenda.png';
import img_stats from '../assets/icones/stats.png';
import img_thematique from '../assets/icones/thematique.png';
import img_mma from '../assets/icones/mma.png';
import img_lutte from '../assets/icones/lutte.png';
import img_camera from '../assets/icones/camera.png';
import img_metro from '../assets/icones/metro.png';
import img_axes from '../assets/icones/axes.png';
import img_bus from '../assets/icones/bus.png';
import img_parking from '../assets/icones/parking.png';
import FooterComponent from '../Components/FooterComponent';




function Accueil () {

    return <>
        <JumbotronComponent />
        <div className="section_volonte">
            <div className="description_volonte">
                <h1>Notre volonté</h1>
                <p>Nous visons à changer les perceptions des sports de combat en offrant un cadre sécuritaire, axé sur la pédagogie et la didactique. Nous proposons des sessions combinant différents sports de combat pour rechercher l'efficience. Nos méthodes d'apprentissage reposent sur la littérature scientifique pour optimiser votre progression.</p>
            </div>
            <div className="image_volonte">
                <img src={img_salle} alt="visuel de la salle de sport" />
            </div>
        </div>
        <div className="image_background"></div>
        <div className="section_concept">
            <h1>Un concept exclusif et unique</h1>
            <div className="concept_container">
                <div className="concept_box">
                    <div className="concept_image">
                        <img src= {img_agenda} alt="icone d'un agenda" />
                    </div>
                    <h4>Venez quand vous <br /> voulez</h4>
                    <p>Ouvert 6j/7 <br /> 10h00 à 20h00</p>
                </div>
                <div className="concept_box">
                    <div className="concept_image">
                        <img src={img_stats} alt="icone d'une courbe" />
                    </div>
                    <h4>Prise en charge 100% personnalisée</h4>
                    <p>Testing et individualisation en fonction de vos besoins</p>
                </div>
                <div className="concept_box">
                    <div className="concept_image">
                        <img src={img_thematique} alt="icone thématique" />
                    </div>
                    <h4>Des thématiques <br /> uniques</h4>
                    <p>Conceptualisation et réflexion autour de la pratique</p>
                </div>
                <div className="concept_box">
                    <div className="concept_image">
                        <img src={img_mma} alt="icone d'un gant de mma" />
                    </div>
                    <h4>Inclus la location des protections</h4>
                    <p>Fini les oublis de gants de boxe, MMA et protèges tibias</p>
                </div>
            </div>
        </div>
        <div className='info_container'>
            <h1>Des séances d'entrainements comme nous n'en avez jamais vu</h1>
            <div className='info_box'>
                <div className='info_image'>
                    <img src={img_lutte} alt="icone de deux lutteurs" />
                </div>
                <div className='info_description'>
                    <h2>Leçons d'entrainements en petit comité (small groupe)</h2>
                    <p>Une expérience d'entrainement plus individualisée et motivante, permettant d'adapter les situations d’apprentissage en fonction de vos besoins, garantissant une évolution plus rapide. Ici, impossible de se cacher car le coach a les yeux rivés sur vous.</p>
                </div>
            </div>
            <div className='info_box'>
                <div className='info_description'>
                    <h2>Analayse vidéo de vos performances sur écran géant</h2>
                    <p>Ce dispositif permet à chacun de visualiser ses performances et de les comparer à ses représentations mentales, afin de mieux discerner ses mouvements et schémas tactiques, facilitant ainsi son acquisition et l’apprentissage.</p>
                </div>
                <div className='info_image'>
                    <img src={img_camera} alt="icone d'une camera" />
                </div>
            </div>
        </div>
        <div className='section_trafic'>
            <h1>Un lieu de +500m² sur Lille</h1>
            <div className='trafic_container'>
                <div className='trafic_box'>
                    <div className='trafic_image'>
                        <img src={img_parking} alt="icone parking" />
                    </div>
                    <div className='trafic_description'>
                        <h4>Parking gratuit</h4>
                        <p>Stationnement facile</p>
                    </div>
                </div>
                <div className='trafic_box'>
                    <div className='trafic_image'>
                        <img src={img_axes} alt="icone axes routiers" />
                    </div>
                    <div className='trafic_description'>
                        <h4>Proche des axes routiers</h4>
                        <p>Sortie n°5</p>
                    </div>
                </div>
                <div className='trafic_box'>
                    <div className='trafic_image'>
                        <img src={img_metro} alt="icone métro" />
                    </div>
                    <div className='trafic_description'>
                        <h4>Métro à proximité</h4>
                        <p>Arrêt Caulier - 800m</p>
                    </div>
                </div>
                <div className='trafic_box'>
                    <div className='trafic_image'>
                        <img src={img_bus} alt="icone bus" />
                    </div>
                    <div className='trafic_description'>
                        <h4>Bus à proximité</h4>
                        <p>Arrêt Prévost - 500m</p>
                    </div>
                </div>
            </div>
        </div>        
    </>
}

export default Accueil;