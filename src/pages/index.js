import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Card from './components/Card'
import CardTaller from './components/CardTaller'

// import styles from '@/styles/Home.module.css'
// import Image from "next/image";


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
            <h2 className='my-3'>Querida Familia Paraguaya</h2>
            <p>Metodología internacional exigente, dinámica y basada en valores.</p>
            
        </div>
        <div className='container'>
          <hr/>

        </div>
        <div className='row p-5  text-start container mx-auto'>
            <div className='col-12 col-md-6'>
                <h2 className='my-3'>#WELOVEFLEMING</h2>
                <h3 className='my-3'>TUS HIJOS MERECEN LA MEJOR EDUCACIÓN</h3>
                <p className='my-3'>Somos un colegio británico, mixto, que atiende alumnos desde los 3 hasta los 18 años de edad. Tenemos más de 30 años de trayectoria y experiencia, los últimos 5 ofreciendo los programas del Bachillerato Internacional: PYP y IBDP. Nuestros alumnos reciben una educación británica, peruana e internacional</p>
                <ul className='p-0'>
                  <li className='list-group-item p-0 my-4 ' ><Image  src="/check.svg"  className='me-3' alt="check" width={30} height={30} />Texto de ejemplo para el list</li>
                  <li className='list-group-item p-0 my-4 '><Image  src="/check.svg"  className='me-3' alt="check" width={30} height={30} />Texto de ejemplo para el list</li>
                  <li className='list-group-item p-0 my-4 '><Image  src="/check.svg"  className='me-3' alt="check" width={30} height={30} />Texto de ejemplo para el list</li>
                  <li className='list-group-item p-0 my-4 '><Image  src="/check.svg"  className='me-3' alt="check" width={30} height={30} />Texto de ejemplo para el list</li>
                </ul>
            </div>
            <div className='col-12 col-md-6'>
              <div className='row'>
                  <Card image="/centro-de-estudiantes.png" titulo="Educación" text="Somos un colegio británico, mixto, que atiende alumnos desde los 3 hasta los 18 años de edad. Tenemos más de 30 años de trayectoria y experiencia, los últimos 5 ofreciendo los programas del Bachillerato Internacional" column="6" />
                  <Card image="/libro-abierto.png" titulo="Enseñanza" text="Somos un colegio británico, mixto, que atiende alumnos desde los 3 hasta los 18 años de edad. Tenemos más de 30 años de trayectoria y experiencia, los últimos 5 ofreciendo los programas del Bachillerato Internacional" column="6" />
                  <Card image="/tarea.png" titulo="Tareas"text="Somos un colegio británico, mixto, que atiende alumnos desde los 3 hasta los 18 años de edad. Tenemos más de 30 años de trayectoria y experiencia, los últimos 5 ofreciendo los programas del Bachillerato Internacional" />
               
              </div>
            </div>
        </div>
        <div className='text-center'>
          
            <div className='row mt-3 mx-0'>
             
               <CardTaller image="/imagen1.jpg" name="Danza" ruta="/taller/dance" /> 
               <CardTaller image="/imagen2.jpg" name="Futbol" ruta="/taller/futbol" /> 
                <CardTaller image="/imagen3.jpg" name="Natación" ruta="/taller/swimming" /> 
              </div>
            </div>
        <div className='py-3 bg-danger p-5 d-flex align-items-center'>
          <div className='rounded-circle border  taller-balon bg-secondary d-flex justify-content-center align-items-center max-circle'>
            <Image className="social" src="/balon.png" width={50} height={50} alt="Talleres de colegio"/>
          </div>
          <div className='mx-4 text-white'>
            <h2 className='text-white'>ACTIVIDADES CO CURRICULARES</h2>
            <p>Complementando el programa académico</p>
          </div>
        </div>

      </main>
    </>
  )
}
