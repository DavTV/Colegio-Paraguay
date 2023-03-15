import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
// import Acoordion from "../components/Acoordion";
const talleres = [
    {
        id:1,
        nombre: "futbol", fecha: "06 de enero de 2023", modalidad: "Presencial", duracion: "23 horas", horario: "De lunes a viernes en diversos horarios", organiza: "Deportes PUCP", imagenFondo: "...", descripcion: "El trabajo, la disciplina, el orden táctico y la predisposición del juego en conjunto marcará la diferencia frente al rival. El gol es la culminación, el logro y la máxima expresión del trabajo en conjunto de todas las líneas de ataque y defensa de un equipo. Es de funcionamiento dinámico, la práctica del deporte como formación contribuye al mejoramiento de todas las capacidades físicas, ayuda al empoderamiento del alumno y a la identificación plena con su camiseta a la que represent", objetivos: [
            "Mejorar a través del ejercicio físico sus capacidades técnico – tácticas aplicándose en partidos de competencia o amistoso",
            "Reforzar y aplicar los valores relacionados a trabajar en equipo: solidaridad, compartir, etc.",
            "Generar la socialización sana y educada frente al resultado de los partidos amistosos, teniendo como fin el juego limpio"
        ],
        dirigido: {
             edades: "5 a 17 años" ,
            nota: "Taller de arqueros: todas las edades" 
            },
        horariosHombres: [
            "De 13 a 17 años: 12:00 m. a 1:00 p.m.", "De 9 a 12 años: 10:00 a.m. a 11:00 a.m."
        ],
        horariosMujeres: [
            "De 5 a 8 años: 09:00 a.m. a 10:00 a.m.", "De 9 a 12 años: 10:00 a.m. a 11:00 a.m.", "De 13 a 17 años: 10:00 a.m. a 11:00 a.m."
        ],
        contenidos: [
            "Psicomotricidad",
            "Conducción del balón interna y externa.",
            "Dribling",
            "Desplazamiento con el balón: ofensivos y defensivos",
            "Pase y recepción",
            "Técnicas del saque lateral.",
            "Fundamentos teóricos y tácticos del fútbol"
        ],
        docentes: ["Miguel Giuria", "Rafael García"], costo: 350,


    },{
        nombre:"preuba"
    }
]
const Taller = () => {
    const router = useRouter();
    const { name } = router.query;
    const [datataller, setDatataller] = useState(talleres);
    console.log(name)
    // const [detalles, setDetalles] = useState([]);    
    // const [nameUrl, setNameUrl] = useState("");
    const filterTaller=()=>{
        
        
            // setNameUrl(name)
           setDatataller(talleres.filter((taller)=>taller.nombre == name))
      
    }
    useEffect(()=>{
        // console.log(name, datataller)
        filterTaller()
    },[name])
    return (
        

        <div> 
        <div className='py-3 bg-danger'></div>

            {datataller.length > 0 ? datataller.map((taller) => {
                return (
                    <>
                        <div className="bg-taller" key={taller.id}>
                            <div className="cortina text-white">
                                <div className="container p-5">

                                    <h2 className="text-white my-4">Taller de  {taller.nombre}</h2>
                                    <p><strong className="fw-bold text-danger "> <span className="mx-2"><Image src="/calendar.svg" alt="fecha" width={30} height={30} /> </span> Fecha:</strong> {taller.fecha}</p>

                                    <p><strong className="fw-bold text-danger  "> <span className="mx-2"><Image src="/people.svg" alt="modalidad" width={30} height={30} /> </span> Modalidad:</strong> {taller.modalidad}</p>

                                    <p><strong className="fw-bold text-danger  "> <span className="mx-2"><Image src="/alarm.svg" alt="duracion" width={30} height={30} /> </span> Duración:</strong> {taller.duracion}</p>

                                    <p><strong className="fw-bold  text-danger "> <span className="mx-2"><Image src="/bell.svg" alt="" width={30} height={30} /> </span> Horario:</strong> {taller.horario}</p>

                                    <p><strong className="fw-bold text-danger  "> <span className="mx-2"><Image src="/house-door.svg" alt="organizador" width={30} height={30} /> </span> Organiza:</strong> {taller.organiza}</p>



                                </div>
                            </div>
                        </div>
                        <div className="container my-5">
                                <p>{taller.descripcion}</p>
                            {   
                                // <Acoordion taller={datataller}/>
                                        <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed text-danger h2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Objetivos
                    </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse " aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        {/* <ul>
                            {taller.objetivos.map((objetivo,index)=>{
                                <li className="my-3" key={index+"obj"}>{objetivo}</li>
                            }) }
                        </ul> */}
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed text-danger h2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Dirigido a
                    </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">{
                        // <ul>
                        //     <li>
                        //         {taller.dirigido.edades}
                        //     </li>
                        //     <li>
                        //         {taller.dirigido.nota}
                        //     </li>
                        // </ul>
                    }</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed text-danger h2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Horario
                    </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse p-3" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <p>Hombre</p>
                    {/* <ul>
                            {taller.horariosHombres.map((horario,index)=>{
                                 return  <li key={index+"horh"}>{horario}</li>
                            })}                        
                    </ul> */}

                    <p>Mujeres</p>
                    <ul>
                            {/* { taller.horariosMujeres.map((horario,index)=>{
                                 <li key={index+"horm"}>{horario}</li>
                            })}                         */}
                    </ul>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFour">
                    <button className="accordion-button collapsed text-danger h2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                        Contenido
                    </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">{
//                         <ul>
//                             {
//                                 taller.contenidos.map((texto,index)=>{
//                                         <li key={index+"text"}>
//                                         {texto}
//                                     </li>

// })
// }
                            
//                         </ul>
                    }</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFive">
                    <button className="accordion-button collapsed text-danger h2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                        Docentes
                    </button>
                </h2>
                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">{
                        // <ul>
                        //     {
                        //         taller.docentes.map((docente,index)=>{
                        //             return    <li key={index+"doc"}>
                        //                 {docente}
                        //             </li>

                        //         })
                        //     }
                            
                        // </ul>
                    }</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingSix">
                    <button className="accordion-button collapsed text-danger h2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                        Costo
                    </button>
                </h2>
                <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">{
                        <ul>
                             <li>
                                       S/    {taller.costo}
                                    </li>

                              
                            
                            
                        </ul>
                    }</div>
                </div>
            </div>
            
        </div>
                                
                            }

                        </div>
                       


                    </>

                )

            }) :<div className="text-center my-5"> <p>Este taller aún no está disponible.</p></div>}

         

        </div>

    )
}
 
export default Taller;