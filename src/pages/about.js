import Image from "next/image";
import Slider from "./components/Slider";
const About = () => {
    return ( 
        <>
           <Head>
        <title>Nosotros</title>
        <meta name="description" content="Mas sobre nosotros, colegio republica de paraguay" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/colegioLogo.jpeg  " />
      </Head>
        
        <div>
        <div className='py-3 bg-danger'></div>

        <div className="container text-center">
            <h2 className="my-5">Conoce más sobre nosotros</h2>
            <hr/>
            <div className="row my-5 px-3 text-start ">
                <div className="col-12 col-md-6 my-4">
                    <h3 className="text-center">!Bienvenidos a nuestro colegio¡</h3>
                    <p>
                    La Institución educativa Colegio 1146 Republica Del Paraguay se sitúa en el lugar de Lima Cercado, provincia de Lima, ésta institución depende de la UGEL 03 BREÑA que revisa la institución educativa, y esta última pertenece a la Dirección regional de educación DRE LIMA METROPOLITANA.



                    </p>
                    <p>
                    La Institución educativa Colegio 1146 Republica Del Paraguay, es más que una Institución Educativa, es un contexto de familia, un equipo de profesionales altamente competitivos que vigilan para que los alumnos se integren adecuadamente, tanto en su vida personal como también social y escolar.
                    </p>
                    {/* <p>
                    Nuestros profesores guían a nuestros alumnos para que se conviertan en aprendices independientes, a través de un proceso de indagación y otras actividades estimulantes, lo que les permite alcanzar sus objetivos de aprendizaje.
                    </p> */}
                </div>
                <div className="col-12 col-md-5  d-flex justify-content-center">
                    <Image  src="/img-about.jpg" width={300} height={400} className="imagen-about " alt="bienvenidos al colegio republica del paraguay" />
                </div>
            </div>
            <hr/>

        </div>
        <Slider />
            <div className=" bg-danger text-white">
                <div className="row  container mx-auto">

                <div className=" col-12 col-md-6  text-start px-3 my-5">
                    <h2 className="text-white">MISIÓN</h2>
                    <p>Orientamos a nuestros estudiantes a ser ciudadanos del mundo, íntegros y altamente exitosos. Nuestros estudiantes demuestran su independencia, determinan sus propias metas y construyen sus sistemas únicos de valores dentro del contexto de una mentalidad internacional, de la tolerancia y la comprensión. En particular, destacamos tres cualidades importantes a través de nuestro currículo dinámico y sistema de bienestar estudiantil</p>
                </div>
                <div className=" col-12 col-md-6 text-start  px-3 my-5">
                    <h2 className="text-white">vISIÓN</h2>
                    <p>Orientamos a nuestros estudiantes a ser ciudadanos del mundo, íntegros y altamente exitosos. Nuestros estudiantes demuestran su independencia, determinan sus propias metas y construyen sus sistemas únicos de valores dentro del contexto de una mentalidad internacional, de la tolerancia y la comprensión. En particular, destacamos tres cualidades importantes a través de nuestro currículo dinámico y sistema de bienestar estudiantil</p>
                </div>
                </div>

            </div>
        </div>
        </>
     );
}
 
export default About;