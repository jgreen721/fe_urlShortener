import React from 'react'

const CardInfo = ({data,visible}) => {
  console.log(data.translate)
  return (
    <div style={{'--i':data.translate}} className={visible ? "info-card" : "info-card shrink-card"}>
        <div className="info-card-content">
        <div className="infocard-icon-div">
            <img src={data.icon} alt="" />
        </div>
        <h3 className="card-header">{data.title}</h3>
        <p className="card-blurb">{data.blurb}</p>
        </div>
    </div>
  )
}

export default CardInfo