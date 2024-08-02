import React from 'react'


function IconButtonComponent({ Icon, url }) {
    const handleClick = () => {
        window.open(url, '_blank');
    };


  return <>
    <button style={{
        padding: "10px", 
        border: "none",
        backgroundColor: "transparent",
        margin: "5px",
        cursor: "pointer",
    }} 
    onClick={handleClick}>
      <Icon size={24} color="#fff"/>
    </button>
  
  </>
}

export default IconButtonComponent