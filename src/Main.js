import React, {useState, useEffect} from "react";
import Image from "./pictures/ivana.jpg";
import AboutMe from "./AboutMe";

const Main = () => {
  return(
    <>
    <article class="aboutme">
    <figure className="aboutme__figure">
      <img 
      src={Image} 
      alt="Ivana Stjepanovic"
      />
    </figure>
    <AboutMe 
    one="Natural Language processing" 
    two="Front-end development" 
    three="Digital Marketing" 
    four="Market Research" 
    five="Editing & Localization"/>
    </article>
    </>
  )
}

export default Main;