import React from 'react'
import Button from '../Button/Button'
import { bgDesktop, bgMobile } from '../../const'
import "./BottomSection.css"

const BottomSection = ({isVisible}) => {
  return (
    <div className={isVisible ? "bottom-section" : "bottom-section hide-bottom"}>
      <div className="overlay-img">
      <picture>
          <source media="(min-width: 850px)" srcSet={bgDesktop}/>
          <source media="(min-width: 465px)" srcSet={bgDesktop}/>
          <img className="bottom-bg-img" src={bgMobile}/>
</picture>
      </div>
      <div className="bottom-section-content">
        <h2 className="bottom-header"><span className="boost-h1">Boost</span> <em style={{"--i":"1s"}} className="one"> your </em> <span style={{"--i":"2s"}} className="two">links </span> <span style={{"--i":"3s"}} className="three"> today</span></h2>
        <Button handlePress={()=>{}} isPrimary={true}>Get Started</Button>
        </div>
    </div>
  )
}

export default BottomSection