import Head from 'next/head'
import Image from 'next/image'
import Card from './components/Card'
import CardTaller from './components/CardTaller'

// import styles from '@/styles/Home.module.css'
// import Image from "next/image";


export default function Home() {
  return (
    <>
      <Head>
        <title>Matricula</title>
        <meta name="description" content="Matriculate con nosotros, colegio republica de paraguay" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/colegioLogo.jpeg  " />
      </Head>
      <main className="container-fliud overflow-hidden">
        <div className='py-3 bg-danger'></div>
        <div className='bg-image'>
          <div className='cortina p-2 d-flex align-items-center'>
            <div className='info container'>
              <h1 className='text-white'>COLEGIO REPUBLICA DE PARAGUAY</h1>
               <h2 className='text-white'>Trabajando para formar un futuro mejor.</h2> 
            </div>

          </div>
        </div>
        {/* <div className='py-3 bg-danger'></div> */}
        <div className='text-center mt-5 mb-1 px-2'>
            <h2 className='my-3'>Bienvenida Querida Familia Paraguaya</h2>
            <p>Metodología internacional exigente, dinámica y basada en valores.</p>
            
        </div>
        <div className='container'>
          <hr/>

        </div>
        <div className='row p-5  text-start container mx-auto'>
            <div className='col-12 col-md-6'>
                <h2 className='my-3'>#REPUBLICA DE PARAGUAY ❤</h2>
                <h3 className='my-3'>TUS HIJOS MERECEN LA MEJOR EDUCACIÓN</h3>
            <p className='my-3'>Somos un centro público de Innovación Tecnológica de Enseñanza Infantil y Primaria, perteneciente a la Dirección del Área Territorial de Madrid-Capital, dependiente de la Consejería de Educación, Universidades, Ciencia y Portavocía  de la Comunidad de Madrid.



             </p>
             <p>
             En esta página web encontrarás información sobre quiénes somos y nuestra organización; acerca de los procedimientos administrativos más comunes y la normativa que nos rige; así como los aspectos más relevantes referidos al tipo de enseñanza, actividades y servicios que ofrecemos.
              </p>
             
                <ul className='p-0'>
                  <li className='list-group-item p-0 my-4 ' ><Image  src="/check.svg"  className='me-3' alt="check" width={30} height={30} />Resposabilidad con nuestros alumnos.</li>
                  <li className='list-group-item p-0 my-4 '><Image  src="/check.svg"  className='me-3' alt="check" width={30} height={30} />Valores y principios.</li>
                  <li className='list-group-item p-0 my-4 '><Image  src="/check.svg"  className='me-3' alt="check" width={30} height={30} />Mejores ambientes de estudios.</li>
                  <li className='list-group-item p-0 my-4 '><Image  src="/check.svg"  className='me-3' alt="check" width={30} height={30} />Profesores 100% capacitados.</li>
                </ul>
            </div>
            <div className='col-12 col-md-6'>
              <div className='row'>
                  <Card image="/centro-de-estudiantes.png" titulo="Educación" text="Contamos con una excelente plana de docentes capacitados en cada área de enseñanza respectiva, garantizandonos una educación de primer nivel." column="6" />
                  <Card image="/libro-abierto.png" titulo="Materiales" text="Ofrecemos todos los materiales y herramientas necesarias para garantizar el correcto desarrollo y comprensión de las enseñanzas adquiridas." column="6" />
                  <Card image="/tarea.png" titulo="Tareas"text="Tareas y actividades desarrolladas especificamente para cada área y nivel correspondiente, con el fin de desarrollar el intelecto de cada alumno." />
               
              </div>
            </div>
        </div>
        <div className='text-center'>
          
            <div className='row mt-3 mx-0'>
             
               <CardTaller image="/imagen1.jpg" name="Danza" ruta="/taller/dance" /> 
               <CardTaller image="/imagen2.jpg" name="Futbol" ruta="/taller/futbol" /> 
                <CardTaller image="/imagen3.jpg" name="Pintura" ruta="/taller/paint" /> 
              </div>
            </div>
        <div className='py-3 bg-primary  d-flex align-items-center p-2'>
          <div className='mx-1 rounded-circle   taller-balon bg-balon d-flex justify-content-center align-items-center max-circle'>
            <Image className="social" src="/balon.png" width={50} height={50} alt="Talleres de colegio"/>
          </div>
          <div className='mx-4 text-white '>
            <h2 className='text-white text-activities'>ACTIVIDADES EXTRACURRICULARES</h2>
            <p>Complementando el programa académico</p>
          </div>
        </div>

      </main>
    </>
  )
}
