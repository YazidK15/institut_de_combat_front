import React from "react";
import {Link} from "react-router-dom";
import '../styles/LegalComponent.css';


function LegalComponent() {
  return (
    <>
      <div className="footer_mentions">
        <Link to="/legal"> Mentions Légales </Link>
        <Link to="/legal"> Conditions Générales de Vente </Link>
        <Link to="/legal"> Politique de confidentialité </Link>
      </div>
    </>
  );
}

export default LegalComponent;
