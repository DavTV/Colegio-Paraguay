import Image from 'next/image'

const Service =()=>{
    return(
        <div>
        <div className='py-3 bg-danger'></div>
        <div className="container">
            <h2 className="text-center my-4">Nuestros Servicios</h2>
            <hr/>
            <div className="row my-4">
                <div className="col-12 col-md-6">
                     <Image  src ="/slider4.jpeg" width={0} height={0}  layout='responsive' alt="..." />   
                </div>
                <div className="col-12 col-md-6">
                    <h2 className="my-4">Atención al alumno EPG</h2>
                    <p>
                    Nos encargamos de mejorar la experiencia de nuestros alumnos y egresados atendiendo consultas, dudas y solicitudes de documentos y trámites a través del buzón de atención EPG y la central telefónica de atención alumno. ​ 
                    </p>
                    <p>Correo:<strong className="text-danger fw-bold">atencionalumnoepg@usil.edu.pe</strong>  </p>
                    <p>Teléfono:<strong className="text-danger fw-bold"> 5183330 opción 2.</strong></p>
                </div>
            </div>
            <hr/>
        {/* <div className='py-2 bg-primary'></div> */}

            <div className="row my-4">
                <div className="col-12 col-md-6">
                    <h2 className="my-4">Servicios y registros académicos</h2>
                    <p>
                    Nos encargamos de emitir documentos oficiales de la Escuela de Postgrado, asimismo validamos la situación académica de los alumnos y egresados a través de Atención Alumno EPG. Consultas al correo: <strong className="text-danger fw-bold">atencionalumnoepg@usil.edu.pe</strong> ​ 
                    </p>
                </div>
                <div className="col-12 col-md-6">
                     <Image  src ="/slider5.jpeg" width={0} height={0}  layout='responsive' alt="..." />   
                </div>
            </div>
        </div>
        </div>
    )
}
export default Service;