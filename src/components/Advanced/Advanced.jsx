import React, {useRef} from 'react'
import "./Advanced.css"
import CardInfo from "./components/CardInfo"
import { iconBrandRecognition, iconDetailedRecords, iconFullyCustomizable } from '../../const'
import "./Advanced.css"
import { useObserver } from '../../hooks/useObserver';

const Advanced = () => {
    const cardData=[
        {id:1,icon:iconBrandRecognition,translate:0,title:"Brand Recognition",blurb:"Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."},
        {id:2,icon:iconDetailedRecords,translate:5,title:"Detailed Records",blurb:"Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."},
        {id:3,icon:iconFullyCustomizable,translate:10,title:"Fully Customizable",blurb:"Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."},
    ]
    const cardsRef = useRef();
    const {visible} = useObserver(cardsRef);

  return (
    <div className="advanced-section">
      <div className="advanced-content-section">
        <div className="advanced-header-section">
        <h2 className="advanced-header">Advanced Statistics</h2>
        <p className="advanced-blurb">Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        <ul ref={cardsRef} className="cards-list">
          {cardData.map(card=>(
            <CardInfo data={card} visible={visible} key={card.id}/>
          ))}

        </ul>
      </div>
    </div>
  )
}

export default Advanced