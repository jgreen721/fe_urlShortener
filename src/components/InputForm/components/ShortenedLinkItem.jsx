import React, {useRef} from 'react'
import { useObserver } from '../../../hooks/useObserver';
import Button from '../../Button/Button'

const ShortenedLinkItem = ({link,handleCopy,handleDelete,copiedUrl}) => {
  const linkRef = useRef();
  const {visible} = useObserver(linkRef);

  
  const handleCopyLink=()=>{
    handleCopy(link.shortened)
  }

  return (
    <li ref={linkRef} className="link-item">
      <div className={visible ? "link-item-content" : "link-item-content slideaway"}>
        <div className="left-linkitem-column">
        <h5 className="link-text">{link.original}</h5>
        </div> 
        <div className="right-linkitem-column">
        {/* <div className="right-row"> */}
        <div className="mobile-row">
        <h5 className="link-text cyan-color">https://{link.shortened}</h5>
        <button className="mobile delete-btn" onClick={()=>handleDelete(link)}>&times;</button>

        </div>
        <Button isCopied={copiedUrl == link.shortened} isPrimary={false} handlePress={handleCopyLink}>{copiedUrl == link.shortened ? 'Copied' : 'Copy'}</Button>
        <button className="desktop delete-btn" onClick={()=>handleDelete(link)}>&times;</button>
        {/* </div> */}
        </div>
        </div>
    </li>
  )
}

export default ShortenedLinkItem