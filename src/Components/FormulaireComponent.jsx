import React from 'react'

function FormulaireComponent() {
  return <>   
        <form>
            <h1>Nous contacter</h1>

            <input type="text" id="name" name="name" required placeholder='Votre nom'
            onFocus={(e) => e.target.placeholder = ''}
            onBlur={(e) => e.target.placeholder = 'Votre nom'}/>

            <input type="email" id="email" name="email" required placeholder='Votre email'
            onFocus={(e) => e.target.placeholder = ''}
            onBlur={(e) => e.target.placeholder = 'Votre email'}/>

            <textarea id="message" name="message" required placeholder='Message'
            onFocus={(e) => e.target.placeholder = ''}
            onBlur={(e) => e.target.placeholder = 'Message'}>
            </textarea>
            
            <button type="submit">Envoyer</button>
        </form>
    </>
  
}

export default FormulaireComponent