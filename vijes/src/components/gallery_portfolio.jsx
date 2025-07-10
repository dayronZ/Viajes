import React from 'react'
import Img_portfolio from './img_portfolio'

const Gallery_portfolio = () => {
  return (
    <div>
      
        <div class="gallery">
        <a target="_blank" href="src/assets/france/img_fr1.png">
            <Img_portfolio source= "src/assets/france/img_fr1.png"/>
        </a>
        </div>

        <div class="gallery">
        <a target="_blank" href="src/assets/france/img_fr2.jpeg">
            <Img_portfolio source= "src/assets/france/img_fr2.jpeg"/>
        </a>
        
        </div>

        <div class="gallery">
        <a target="_blank" href="src/assets/france/img_fr3.jpeg">
            <Img_portfolio source= "src/assets/france/img_fr3.jpeg"/>
        </a>

        </div>

        <div class="gallery">
        <a target="_blank" href="src/assets/france/img_fr4.jpeg">
            <Img_portfolio source= "src/assets/france/img_fr4.jpeg"/>
        </a>
        
        </div>

        
    </div>
  )
}

export default Gallery_portfolio
