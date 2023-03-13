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
            <h3>Sub Título</h3>
            <p>Nos da mucho gusto que hayas podido informarte sobre nuestro colegio, si quieres conocer más no dudes en ponerte en contacto con nosotros.</p>
        </div>
        <div className="col-6 col-md-4">
            <h3>Sub Título</h3>
            <p>Nos da mucho gusto que hayas podido informarte sobre nuestro colegio, si quieres conocer más no dudes en ponerte en contacto con nosotros.</p>
        </div>
        <div className="col-12 col-md-4 ">
            <h3>Sub Título</h3>
            <p>Nos da mucho gusto que hayas podido informarte sobre nuestro colegio, si quieres conocer más no dudes en ponerte en contacto con nosotros.</p>
        </div>
            
            
        </div>
     
     );
}
 
export default Footer;