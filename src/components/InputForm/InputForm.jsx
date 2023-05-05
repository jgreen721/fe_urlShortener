import React, {useRef,useState} from 'react'
import Button from '../Button/Button'
import ShortenedLinkItem from './components/ShortenedLinkItem'
import { useObserver } from '../../hooks/useObserver'
import { bgShortenDesktop, bgShortenMobile} from '../../const'
import "./InputForm.css"

const InputForm = () => {
  const inputRef = useRef();

  const [clientUrl,setClientUrl] = useState("") 
  const [error,setError] = useState("");
  const [links,setLinks] = useState(JSON.parse(localStorage.getItem("links")) || [])
  const [copiedUrl, setCopiedUrl] = useState("");
  const BASE_URL = "https://api.shrtco.de/v2/"
  const {visible} = useObserver(inputRef);


  console.log("Visible: " + visible)

  const handleUrlSubmit=(e)=>{
    e.preventDefault();
    if(clientUrl == ""){
      setError("This is not a valid link");
      setTimeout(()=>setError(""),2000);
      return;

    }
    console.log('fx fired!s')
    fetch(`${BASE_URL}shorten?url=${clientUrl}`)
    .then(res=>res.json())
    .then(res=>{
      console.log("res",res)
      if(res.ok){
        let newLink = {id:res.result.code, original:res.result.original_link,shortened:res.result.short_link};
        setLinks([...links, newLink]);
        localStorage.setItem("links",JSON.stringify([...links, newLink]));
        setClientUrl("");
      }
      else{
        setError(res.error.split(",")[0] + " :(");
        setTimeout(()=>setError(""),2000);
      }
    })
  
  }



  const handleCopy=async(shortened)=>{
    try{
    await navigator.clipboard.writeText(shortened)
    setCopiedUrl(shortened)
    }


    catch(err){
        console.log("ERROR")
    }
}


const handleDelete=(link)=>{
  console.log(link,links)
  setLinks(links.filter(l=>l.shortened !== link.shortened));
  localStorage.setItem("links",JSON.stringify(links.filter(l=>l.shortened !== link.shortened)));


}
  return (
    <div ref={inputRef} className="input-form">
    
      <div className={visible ? "input-form-content" : "input-form-content off-screen-input"}>
      <picture>
          <source media="(min-width: 850px)" srcSet={bgShortenDesktop}/>
          <source media="(min-width: 465px)" srcSet={bgShortenDesktop}/>
          <img className="input-form-img" src={bgShortenMobile}/>
</picture>
      <div className="inputform-div">
        <input type="text" name="url-input" value={clientUrl} onChange={(e)=>setClientUrl(e.target.value)} className={error ? "form-control error" : "form-control"} autoComplete="off" placeholder="Shorten a link here..." />
         <h5 className="error-msg">{error}</h5>
      </div>
      <div className="form-div">
        <Button handlePress={handleUrlSubmit} isPrimary={false}>
  Shorten It!
        </Button>
        </div>
        </div>
        <ul className="shortened-links-list">
          {links.map((link,idx)=>(
            <ShortenedLinkItem handleDelete={handleDelete} copiedUrl={copiedUrl} handleCopy={handleCopy} key={idx} link={link}/>
          ))}
        </ul>
    </div>
  )
}

export default InputForm