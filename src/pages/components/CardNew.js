import Link from "next/link";
import Image from "next/image"
const CardNew = ({title,previo,ruta,image}) => {
    return ( 
        <div className="col-12 col-md-4 p-2 ">
        <div className=" card card-body">
            <div className="containerCarNew">
                <Image width={0} height={0} layout='responsive'  src={image} alt={title}/>

            </div>
            <div className="p-3">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{previo}</p>
            <Link href={ruta||''}  className="nav-link text-danger" >Ir a noticia</Link>
            </div>
        </div>
        </div>
     );
}
 
export default CardNew;