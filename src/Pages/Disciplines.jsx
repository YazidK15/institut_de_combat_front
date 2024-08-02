import React from 'react'
import '../styles/disciplines.css'
import img_mma from '../assets/images/theo.jpg';
import img_kick from '../assets/images/kick.jpg';
import img_ground from '../assets/images/ground.jpg';


function Disciplines() {



  return <>
  
  <div className='discipline'>
    <h1>Nos disciplines</h1>
    <div className='discipline_box'>
        <div className='discipline_description'>
            <h2>Mixed Martial Arts (MMA)</h2>
            <p>
                Plongez dans l’univers captivant du Mixed Martial Arts (MMA) – une fusion dynamique d’arts martiaux qui défie les limites physiques et mentales. Dans notre salle, découvrez bien plus qu’un simple entraînement – une aventure passionnante où force, stratégie et discipline se rencontrent.
            </p>
            <p>
                La polyvalence du MMA vous impressionnera. Apprenez les techniques de combat de divers arts martiaux, de la boxe au jiu-jitsu brésilien. Cette diversité vous prépare à toutes les situations, sur le ring et dans la vie quotidienne.
            </p>
            <p>
                Que vous soyez débutant curieux ou athlète expérimenté, nos instructeurs qualifiés vous guideront à travers chaque mouvement, renforçant votre confiance en vous.
            </p>
            <p>
                Cherchez-vous une activité stimulante, un moyen de rester en forme ou simplement une nouvelle passion ? Notre salle est l’endroit idéal. Franchissez le pas, défiez-vous et devenez la meilleure version de vous-même avec le MMA.
            </p>
        </div>
        <div className='discipline_image'>
            <img src={img_mma} alt="photo lors d'un entrainement de MMA" />
        </div>
    </div>
    <div className='discipline_box'>
        <div className='discipline_image'>
            <img src={img_kick} alt="photo lors d'un entrainement de kickboxing" />
        </div>
        <div className='discipline_description'>
            <h2>Kickboxing</h2>
            <p>
                Bienvenue dans le monde dynamique du kickboxing, où la puissance rencontre la finesse, et la stratégie définit le mouvement. Notre salle de sport vous ouvre ses portes pour une expérience unique, alliant discipline physique et réflexion tactique.
            </p>
            <p>
                Au cœur de notre pratique, nous mettons l’accent sur la technique et la précision. Contrairement aux idées reçues, le kickboxing ne se résume pas à des impacts brutaux. Chez nous, nous privilégions le travail à la touche, où chaque mouvement est calculé et exécuté avec grâce. C’est une danse harmonieuse entre force et contrôle, où chaque coup porte une intention précise.
            </p>
            <p>
                Mais ce qui rend notre approche du kickboxing vraiment spéciale, c’est notre engagement envers l’intellectualisation de la pratique. Nous ne nous contentons pas de frapper et d’esquiver. Nous encourageons nos pratiquants à réfléchir tactiquement, à comprendre le pourquoi derrière chaque mouvement. C’est une véritable exploration de l’art martial, où le corps et l’esprit travaillent en tandem pour atteindre des objectifs communs.
            </p>
        </div>
        
    </div>
    <div className='discipline_box'>
        <div className='discipline_description'>
            <h2>Ground fight</h2>
            <p>
                Discipline de combat au sol qui se concentre sur le combat rapproché, où les compétiteurs cherchent à obtenir une position dominante ou à soumettre leur adversaire par des étranglements ou des clés articulaires.
            </p>
            <p>
                Vous apprendrez à utiliser efficacement votre corps pour contrôler votre adversaire et exploiter ses faiblesses.
            </p>
            <p>
                Vous apprendrez également à rester calme et à prendre des décisions rapides sous pression, tout en développant une grande confiance en vous et en vos capacités.
            </p>
        </div>
        <div className='discipline_image'>
            <img src={img_ground} alt="photo lors d'un entrainement de ground and fight" />
        </div>
    </div>
  </div>
  
  
  </>
}

export default Disciplines