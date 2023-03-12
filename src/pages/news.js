import { useState, useEffect
} from "react";
import CardNew from "./components/CardNew";
import Paginator from 'react-hooks-paginator';


const DataNews =[
    {
        id:1,
        title:"Ganador del concurso de matematicas", previo:"El alumno xxxxx gano el concurso de matematicas realizado el pasado 3 de ...", ruta:"#", image:"/centro-de-estudiantes.png"
    },
    {
        id:2,
        title:"Ganador del concurso de matematicas", previo:"El alumno xxxxx gano el concurso de matematicas realizado el pasado 3 de ...", ruta:"#", image:"/centro-de-estudiantes.png"
    },
    {
        id:3,
        title:"Ganador del concurso de matematicas", previo:"El alumno xxxxx gano el concurso de matematicas realizado el pasado 3 de ...", ruta:"#", image:"/centro-de-estudiantes.png"
    },
    {
        id:4,
        title:"Ganador del concurso de matematicas", previo:"El alumno xxxxx gano el concurso de matematicas realizado el pasado 3 de ...", ruta:"#", image:"/centro-de-estudiantes.png"
    },
    {
        id:5,
        title:"Ganador del concurso de matematicas", previo:"El alumno xxxxx gano el concurso de matematicas realizado el pasado 3 de ...", ruta:"#", image:"/centro-de-estudiantes.png"
    },
    {
        id:6,
        title:"Ganador del concurso de matematicas", previo:"El alumno xxxxx gano el concurso de matematicas realizado el pasado 3 de ...", ruta:"#", image:"/centro-de-estudiantes.png"
    },
    {
        id:7,
        title:"Ganador del concurso de matematicas img1", previo:"El alumno xxxxx gano el concurso de matematicas realizado el pasado 3 de ...", ruta:"#", image:"/imagen1.jpg"
    },
    {
        id:8,
        title:"Ganador del concurso de matematicas", previo:"El alumno xxxxx gano el concurso de matematicas realizado el pasado 3 de ...", ruta:"#", image:"/centro-de-estudiantes.png"
    },
    {
        id:9,
        title:"Ganador del concurso de matematicas", previo:"El alumno xxxxx gano el concurso de matematicas realizado el pasado 3 de ...", ruta:"#", image:"/centro-de-estudiantes.png"
    },
    {
        id:10,
        title:"Ganador del concurso de matematicas", previo:"El alumno xxxxx gano el concurso de matematicas realizado el pasado 3 de ...", ruta:"#", image:"/centro-de-estudiantes.png"
    },
    {
        id:11,
        title:"Ganador del concurso de matematicas", previo:"El alumno xxxxx gano el concurso de matematicas realizado el pasado 3 de ...", ruta:"#", image:"/centro-de-estudiantes.png"
    },
    {
        id:12,
        title:"Ganador del concurso de matematicas", previo:"El alumno xxxxx gano el concurso de matematicas realizado el pasado 3 de ...", ruta:"#", image:"/centro-de-estudiantes.png"
    },
    {
        id:13,
        title:"Ganador del concurso de matematicas", previo:"El alumno xxxxx gano el concurso de matematicas realizado el pasado 3 de ...", ruta:"#", image:"/centro-de-estudiantes.png"
    },
    {
        id:14,
        title:"Ganador del concurso de matematicas", previo:"El alumno xxxxx gano el concurso de matematicas realizado el pasado 3 de ...", ruta:"#", image:"/centro-de-estudiantes.png"
    },
    {
        id:15,
        title:"Ganador del concurso de matematicas", previo:"El alumno xxxxx gano el concurso de matematicas realizado el pasado 3 de ...", ruta:"#", image:"/centro-de-estudiantes.png"
    },
    {
        id:16,
        title:"Ganador del concurso de matematicas", previo:"El alumno xxxxx gano el concurso de matematicas realizado el pasado 3 de ...", ruta:"#", image:"/centro-de-estudiantes.png"
    }
];
const News = () => {
    // const [news, setNews] = useState(DataNews);
    
  const pageLimit = 6;
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  useEffect(()=>{
    setData(DataNews)
  },[])

  useEffect(() => {
    setCurrentData(data.slice(offset, offset + pageLimit));
  }, [offset, data]);
    return ( 
        <>
        <div className='py-3 bg-danger'></div>
        <div className="container text-center">
            <h2 className="my-5">Mira lo nuevo</h2>
            <hr/>
            <div className="row">

            {currentData.map((newItem)=>{
                return <CardNew key={newItem.id} title={newItem.title} previo={newItem.previo} ruta={newItem.ruta} image={newItem.image}/>
            })}
            </div>
            <div className="d-flex justify-content-end">
          <Paginator 
          totalRecords={data.length}
          pageLimit={pageLimit}
          pageNeighbours={2}
          setOffset={setOffset}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        
        </div>
        </div>
        </>
     );
}
 
export default News;