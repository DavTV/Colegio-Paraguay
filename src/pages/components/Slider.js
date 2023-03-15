import Image from "next/image";
const Slider = () => {
    return ( 
        <div className="container row mx-auto align-items-center flex-md-row-reverse  ">

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
            
            <div id="carouselExampleAutoplaying" className="carousel slide col-12 col-md-6 slider-sizes my-3" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/slider1.jpeg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/slider2.jpeg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/slider3.jpeg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

     );
}
 
export default Slider;