import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image"
const VideoYoutube = () => {
  const [none, setNone] = useState("none");
  const [block, setBlock] = useState("block");
    const timeLoading=()=>{
          setTimeout(() => {
            setNone("block");
            setBlock("none");
          }, 700);
    }
    useEffect(()=>{
      timeLoading()
    },[])
    return (  
        <div className="my-5">
        <h3>Matriculate tú mismo</h3>
        
          <div className="my-5 p-5" style={{ 
                                display:`${block}` 
                                }}><Image  src="/loading.svg" alt="loading" width={100} height={100}  /> <small>Cargando video</small></div>
          <iframe style={{ 
                                display:`${none}` 
                                }}
                                 width="90%" height="400" className="mx-auto" src="https://www.youtube.com/embed/bypztHMvrw8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen  ></iframe>
        
      </div>
    );
}
 
export default VideoYoutube;