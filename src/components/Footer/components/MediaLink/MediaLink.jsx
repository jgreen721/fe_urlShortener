import React, {useState} from 'react'

const MediaLink = ({mediaLink}) => {
    const [hovered,setHovered] = useState(false);
  return (
      <>
    <img onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} key={mediaLink.id} className="footer-icon" src={hovered ? mediaLink.hover : mediaLink.icon} alt={mediaLink.icon}/>
    </>

  )
}

export default MediaLink