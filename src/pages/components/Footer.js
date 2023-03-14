import Image from "next/image";
const Footer = () => {
    return ( 
        <div className="container mx-auto row py-4">
        {/* <h2>Footer</h2> */}
     
            <div className="text-center my-5 d-flex justify-content-center">
                <div className="mx-2 social"><a   href="#"><Image src="/facebook.svg"  alt ="facebook" width={30} height={30} /></a></div>
                <div className="mx-2 social"><a   href="#"><Image src="/whatsapp.svg"  alt ="whatsapp" width={30} height={30} /></a></div>
                <div className="mx-2 social"><a   href="#"><Image src="/instagram.svg"  alt ="instagram" width={30} height={30} /></a></div>
            </div>
            <hr/>
        <div className="col-6 col-md-4">
            <h3>Datos de ubicación</h3>
            <p>Centro poblado: <strong className = "text-danger fw-bold">Lima Cercado </strong> </p>
            <p>Ubigeo: <strong className = "text-danger fw-bold">150101</strong></p>
            <p>Dirección: <strong className = "text-danger fw-bold">Av. Emancipación 731</strong></p>
        </div>
        <div className="col-6 col-md-4">
            <h3>Datos Generales</h3>
            <p>Alumnos: <strong className = "text-danger fw-bold">225 </strong> </p>
            <p>Profesores: <strong className = "text-danger fw-bold">21 </strong> </p>
            <p>Secciones: <strong className = "text-danger fw-bold">11 </strong> </p>
        </div>
        <div className="col-12 col-md-4 ">
            <h3>Contactos</h3>
            <p>Teléfonos: <strong className = "text-danger fw-bold"> 951 383 434 - 950 598 474 </strong></p>
            <p>E-mail:<strong className = "text-danger fw-bold"> republicadeparaguay1146@gmail.com </strong> </p>
        </div>
            
            
        </div>
     
     );
}
 
export default Footer;