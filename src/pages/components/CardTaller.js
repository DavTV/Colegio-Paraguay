import Link from 'next/link'
import Image from 'next/image'

const CardTaller = ({image,name,ruta}) => {
    return ( 
        <div className=' col-4 p-0 position-relative bg-imagen-home'>
                <Image src={image} alt={name}  className="img-home position-absolute"  width={0} height={0}  sizes="100%" />
                <div className='cortina-imagen-home  d-flex justify-content-center align-items-center'>
                  <Link  className='nav-link text-center bg-danger border text-white rounded-4  p-3' href={ruta||''}>{name} </Link>
                </div> 
        </div>
     );
}
 
export default CardTaller;