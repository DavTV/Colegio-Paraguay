import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Acoordion from "../components/Acoordion";
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
    // const [detalles, setDetalles] = useState([]);    
    const filterTaller=()=>{
        

           setDatataller(talleres.filter((taller)=>taller.nombre == name))
      
    }
    useEffect(()=>{
        filterTaller()
        // console.log(name, datataller)
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
                                
                            }

                        </div>
                       


                    </>

                )

            }) :<div className="text-center my-5"> <p>Este taller aún no está disponible.</p></div>}

         

        </div>

    )
}
 
export default Taller;