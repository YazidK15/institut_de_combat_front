import React from 'react';
import '../styles/jumbotron.css';
import { useNavigate } from 'react-router-dom';

function JumbotronComponent() {
    const navigate = useNavigate()

    const navigateTo = (route) => {
        navigate(route)
    }

  return <>
        <div class="jumbotron">
            <h1>Bienvenue à</h1>
            <p class="typewriter">l'Institut de Combat</p>
            <button onClick={() => navigateTo('/login')}>Inscription</button>
        </div>
  </>
}

export default JumbotronComponent;