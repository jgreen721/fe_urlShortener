import {useEffect,useState} from "react";



export const useObserver = (ref)=>{


    const showSection=(entry)=>{
        if(entry[0].isIntersecting){
            console.log("show element!")
            setVisible(true)
        }
        // else{
        //     console.log('hidden')
        //     setVisible(false)
        // }
    }
    const [visible,setVisible] = useState(false);
    const sectionObserver = new IntersectionObserver(showSection)



    useEffect(()=>{
        if(ref.current){
            sectionObserver.observe(ref.current);
        }
    },[])




    return {visible};

}