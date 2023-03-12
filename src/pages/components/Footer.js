import Image from "next/image";
const Footer = () => {
    return ( 
        <div className="container mx-auto row py-4">
        {/* <h2>Footer</h2> */}
        <div className="col-6 col-md-3">
            <h3>Sub Título</h3>
            <p>Nos da mucho gusto que hayas podido informarte sobre nuestro colegio, si quieres conocer más no dudes en ponerte en contacto con nosotros.</p>
        </div>
        <div className="col-6 col-md-3">
            <h3>Sub Título</h3>
            <p>Nos da mucho gusto que hayas podido informarte sobre nuestro colegio, si quieres conocer más no dudes en ponerte en contacto con nosotros.</p>
        </div>
        <div className="col-6 col-md-3">
            <h3>Sub Título</h3>
            <p>Nos da mucho gusto que hayas podido informarte sobre nuestro colegio, si quieres conocer más no dudes en ponerte en contacto con nosotros.</p>
        </div>
        <div className="col-6 col-md-3">
            <h3>Redes Socilaes</h3>
            
                <span className="mx-2"><a  className="social" href="#"><Image src="/facebook.svg"  alt ="facebook" width={50} height={50} /></a></span>
                <span className="mx-2"><a  className="social" href="#"><Image src="/whatsapp.svg"  alt ="whatsapp" width={50} height={50} /></a></span>
                <span className="mx-2"><a  className="social" href="#"><Image src="/instagram.svg"  alt ="instagram" width={50} height={50} /></a></span>
            
        </div>
        </div>
     );
}
 
export default Footer;