import Image from "next/image";
const About = () => {
    return ( 
        <div>
        <div className='py-3 bg-danger'></div>

        <div className="container text-center">
            <h2 className="my-5">BIENVENIDOS</h2>
            <hr/>
            <div className="row my-5">
                <div className="col-12 col-md-6">
                    <h3>!Bienvenidos a nuestro colegio¡</h3>
                    <p>
                    El Fleming College es una comunidad cálida y amigable, que alienta a los estudiantes a convertirse en ciudadanos del mundo altamente exitosos y con principios.
                    </p>
                    <p>
                    Ofrecemos un currículo amplio y equilibrado, basado en los mejores estándares británicos, peruanos e internacionales, y estamos orgullosos de ser el primer Colegio del Mundo del IB en Trujillo. A través de nuestro plan de estudios dinámico basado en conceptos y nuestro sistema pastoral, alentamos a nuestros alumnos a desarrollar las cualidades de la pasión, la solidaridad, la perseverancia y la mentalidad internacional.
                    </p>
                    <p>
                    Nuestros profesores guían a nuestros alumnos para que se conviertan en aprendices independientes, a través de un proceso de indagación y otras actividades estimulantes, lo que les permite alcanzar sus objetivos de aprendizaje.
                    </p>
                </div>
                <div className="col-12 col-md-6">
                    <Image  src="/imagen1.jpg" width={300} height={400} className="imagen-about" />
                </div>
            </div>

        </div>
            <div className=" bg-danger text-white">
                <div className="row  container mx-auto">

                <div className=" col-12 col-md-6 text-center text-md-center px-3 my-5">
                    <h2 className="text-white">MISIÓN</h2>
                    <p>Orientamos a nuestros estudiantes a ser ciudadanos del mundo, íntegros y altamente exitosos. Nuestros estudiantes demuestran su independencia, determinan sus propias metas y construyen sus sistemas únicos de valores dentro del contexto de una mentalidad internacional, de la tolerancia y la comprensión. En particular, destacamos tres cualidades importantes a través de nuestro currículo dinámico y sistema de bienestar estudiantil</p>
                </div>
                <div className=" col-12 col-md-6 text-center text-md-center px-3 my-5">
                    <h2 className="text-white">vISIÓN</h2>
                    <p>Orientamos a nuestros estudiantes a ser ciudadanos del mundo, íntegros y altamente exitosos. Nuestros estudiantes demuestran su independencia, determinan sus propias metas y construyen sus sistemas únicos de valores dentro del contexto de una mentalidad internacional, de la tolerancia y la comprensión. En particular, destacamos tres cualidades importantes a través de nuestro currículo dinámico y sistema de bienestar estudiantil</p>
                </div>
                </div>

            </div>
        </div>
     );
}
 
export default About;