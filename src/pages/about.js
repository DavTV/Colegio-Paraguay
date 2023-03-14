import Image from "next/image";
const About = () => {
    return ( 
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
                    <Image  src="/imagen1.jpg" width={300} height={400} className="imagen-about " />
                </div>
            </div>
            <hr/>

        </div>
        <div className="container row mx-auto align-items-center">
        <div id="carouselExampleIndicators" class="carousel slide col-12 col-md-6">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner slider-sizes my-5">
            <div class="carousel-item active">
            <img src="/slider1.webp" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src="slider2.png" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src="/slider3.jpg" class="d-block w-100" alt="..."/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
        <div className="col-12 col-md-6">
        <p>
        La IE Colegio 1146 Republica Del Paraguay busca progresar personas facultadas con una alta autoestima, conocimientos, capacidades sociales y una estable enseñanza académica, moral y emocional para que puedan obtener el éxito personal y profesional dentro de una sociedad moderna y cambiante.



        </p>
        <p>
        En institucioneducativa sabemos que en Lima esta I.E. facilita una educación de alta calidad en un sector de ejercitamiento seguro, en donde nuestros alumnos logran su total crecimiento espiritual, intelectual, moral, físico, social y emocional.

        </p>
        {/* <p>
        La IE Colegio 1146 Republica Del Paraguay busca progresar personas facultadas con una alta autoestima, conocimientos, capacidades sociales y una estable enseñanza académica, moral y emocional para que puedan obtener el éxito personal y profesional dentro de una sociedad moderna y cambiante.

        </p> */}


        </div>
        </div>
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
     );
}
 
export default About;