import { useState } from "react";
import { useEffect } from "react";

const VideoYoutube = () => {
  const [loading, setLoading] = useState(false);
    const timeLoading=()=>{
          setTimeout(() => {
            setLoading(true);
          }, 500);
    }
    useEffect(()=>{
      timeLoading()
    },[])
    return (  
        <div className="my-5">
        <h3>Matriculate tú mismo</h3>
        {
          loading == false? <p className="my-5 py-5">Cargando ...</p>:
        <iframe width="90%" height="400" src="https://www.youtube.com/embed/bypztHMvrw8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        }
      </div>
    );
}
 
export default VideoYoutube;