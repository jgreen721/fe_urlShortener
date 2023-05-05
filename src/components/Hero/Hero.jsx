import React from 'react'
import Button from "../Button/Button"
import "./Hero.css"
import { workingIllustration } from '../../const'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="desktop hero-column">

            <div className="hero-column-content">
                <h1 className="hero-header"> <em> More </em> than just shorter links</h1>
                <p className="hero-blurb">Build your brand's recognition an get detailed insights on how your links are performing.</p>
                <Button isPrimary={true}>Get Started</Button>
            </div>
        </div>
        <div className="hero-column">
        <picture>
          <source media="(min-width: 650px)" srcSet={workingIllustration}/>
          <source media="(min-width: 465px)" srcSet={workingIllustration}/>
          <img className="hero-img" src={workingIllustration}/>
</picture>
        </div>
        <div className="mobile hero-column">
          
          <div className="mobile hero-column-content">
              <h1 className="hero-header">More than just shorter links</h1>
              <p className="hero-blurb">Build your brand's recognition an get detailed insights on how your links are performing.</p>
              <Button isPrimary={true}>Get Started</Button>
          </div>
      </div>
        </div>
    </div>
  )
}

export default Hero