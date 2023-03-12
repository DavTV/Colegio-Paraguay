import Link from "next/link";

const CardNew = ({title,previo,ruta,image}) => {
    return ( 
        <div class="col-6 col-md-4 p-2 ">
        <div class=" card card-body">
            <image className="w-100" src={image} />
            <div className="p-3">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{previo}</p>
            <Link href={ruta||''}  className="nav-link text-danger" >Ir a noticia</Link>
            </div>
        </div>
        </div>
     );
}
 
export default CardNew;