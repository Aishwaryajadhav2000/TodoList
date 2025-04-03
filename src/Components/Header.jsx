import React from 'react'
import myImage from "../assets/logo.png"; // Adjust path as needed

function Header() {
  return (
    <div className='headder'>
     

      <img src={myImage} alt="My PNG" width="70" height="70" />
        
      <h1>
      Aishwarya's Task List
       
      </h1>
      
      <img src={myImage} alt="My PNG" width="70" height="70" />

    </div>
  )
}


export default Header