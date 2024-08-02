import React from 'react'
import '../styles/footer.css';
import MapComponent from './MapComponent'
import img_logo from '../assets/icones/logo.png'
import img_telephone from '../assets/icones/telephone.png'
import img_localisation from '../assets/icones/localisation.png'
import FormulaireComponent from './FormulaireComponent';
import LegalComponent from './LegalComponent';
import IconButtonComponent from './IconButtonComponent';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';


function FooterComponent() {
  return <>
    <footer>
        <div className='top_footer'>
            <div className='left_footer'>
                <div className='description_footer'>
                    <div className='footer_title'>
                        <div>
                            <img src={img_logo} alt="logo de l'institut de combat" />
                        </div>
                        <h4>L'Institut de Combat</h4>
                    </div>
                    <div className='footer_number'>
                        <div>
                            <img src={img_telephone} alt="icone d'un téléphone" />
                        </div>
                        <p>06.44.05.58.77</p>
                    </div>
                    <p>L'Institut de Combat est un établissement d'enseignement basé sur un concept exclusif et unique</p>
                    <div className='footer_adress'>
                        <div>
                            <img src={img_localisation} alt="icone d'un cursor de localisation" />
                        </div>
                        <p>11 rue Louis Braille, Mons-en-Baroeul (59370)</p>
                    </div>
                    <div><LegalComponent/></div>
                </div>  
                <div className='map_footer'><MapComponent/></div>
            </div>
            <div><FormulaireComponent/></div>
        </div>
        <div className='bot_footer'>
            <div><p>© 2024 INSTITUT DE COMBAT, Tous droits reservés.</p></div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <IconButtonComponent Icon={FaInstagram} url="https://www.instagram.com" />
      <IconButtonComponent Icon={FaLinkedin} url="https://www.linkedin.com" />
      <IconButtonComponent Icon={FaFacebook} url="https://www.facebook.com" />
    </div>
        </div>


    </footer>
  </>
}

export default FooterComponent