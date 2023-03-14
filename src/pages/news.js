import { useState, useEffect
} from "react";
import CardNew from "./components/CardNew";
import Paginator from 'react-hooks-paginator';


const DataNews =[
   { id:1,
    title:"Apertura de matriculas", previo:"El colegio de la Republica de Paraguay inicia la apertura de sus matriculas para este 2023 ...", ruta:"/", image:"/imgNews/matriculas.jpeg"
    },
    {
        id:2,
        title:"90 Aniversario del colegio", previo:"El colegio de la Republica celebra su gran recorrido atreves de todos estos años al servicio académico ...", ruta:"/", image:"/imgNews/aniversario.jpeg"
    },
    {
        id:3,
        title:"inicio del año escolar", previo:"se tiene previsto que las clases comenzaran a partir del día 20 del presente mes de marzo ...", ruta:"/", image:"/imgNews/inicioClases.jpeg"
    },
    {
        id:4,
        title:"Apertura del nuevo taller", previo:"Se cuenta con la inauguración del nuevo taller de tik tok para los mas jóvenes y niños del centro educatico ...", ruta:"/", image:"/imgNews/tallerTikTok.jpeg"
    },
    {
        id:5,
        title:"Ganador del concurso de matematicas", previo:"El alumno xxxxx gano el concurso de matematicas realizado el pasado 3 de ...", ruta:"/", image:"/imagen3.jpg"
    },
    {
        id:6,
        title:"Ganador del concurso de matematicas", previo:"El alumno xxxxx gano el concurso de matematicas realizado el pasado 3 de ...", ruta:"/", image:"/imagen2.jpg"
    },
    {
        id:7,
        title:"Ganador del concurso de matematicas img1", previo:"El alumno xxxxx gano el concurso de matematicas realizado el pasado 3 de ...", ruta:"/", image:"/imagen1.jpg"
    },
    {
        id:8,
        title:"Ganador del concurso de matematicas", previo:"El alumno xxxxx gano el concurso de matematicas realizado el pasado 3 de ...", ruta:"/", image:"/imagen1.jpg"
    },
    {
        id:9,
        title:"Ganador del concurso de matematicas", previo:"El alumno xxxxx gano el concurso de matematicas realizado el pasado 3 de ...", ruta:"/", image:"/imagen3.jpg"
    },
    {
        id:10,
        title:"Ganador del concurso de matematicas", previo:"El alumno xxxxx gano el concurso de matematicas realizado el pasado 3 de ...", ruta:"/", image:"/imagen2.jpg"
    },
    {
        id:11,
        title:"Ganador del concurso de matematicas", previo:"El alumno xxxxx gano el concurso de matematicas realizado el pasado 3 de ...", ruta:"/", image:"/imagen3.jpg"
    },
    {
        id:12,
        title:"Ganador del concurso de matematicas", previo:"El alumno xxxxx gano el concurso de matematicas realizado el pasado 3 de ...", ruta:"/", image:"/imagen1.jpg"
    },
    {
        id:13,
        title:"Ganador del concurso de matematicas", previo:"El alumno xxxxx gano el concurso de matematicas realizado el pasado 3 de ...", ruta:"/", image:"/imagen2.jpg"
    },
    {
        id:14,
        title:"Ganador del concurso de matematicas", previo:"El alumno xxxxx gano el concurso de matematicas realizado el pasado 3 de ...", ruta:"/", image:"/imagen3.jpg"
    },
    {
        id:15,
        title:"Ganador del concurso de matematicas", previo:"El alumno xxxxx gano el concurso de matematicas realizado el pasado 3 de ...", ruta:"/", image:"/imagen1.jpg"
    },
    {
        id:16,
        title:"Ganador del concurso de matematicas", previo:"El alumno xxxxx gano el concurso de matematicas realizado el pasado 3 de ...", ruta:"/", image:"/imagen2.jpg"
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