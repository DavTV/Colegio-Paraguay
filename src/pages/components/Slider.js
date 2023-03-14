import Image from "next/image";
const Slider = () => {
    return ( 
        <div className="container row mx-auto align-items-center">
        <div id="carouselExampleIndicators" class="carousel slide col-12 col-md-6">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner slider-sizes my-5">
            <div class="carousel-item active">
            <img src="/slider1.jpeg" class="d-block w-100" alt="..."/>
            </div>
            {/* <div class="carousel-item">
            <img src="slider2.jpeg" class="d-block w-100" alt="..."/>
            </div> */}
           
            <div class="carousel-item">
            <img src="/slider4.jpeg" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src="/slider5.jpeg" class="d-block w-100" alt="..."/>
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
     
     );
}
 
export default Slider;