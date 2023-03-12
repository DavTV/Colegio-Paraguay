import Image from "next/image";

const Card = ({image,titulo,text,column}) => {
    return ( 
        <div className={`my-3 col-12 col-lg-${column}`}>
            <div className='border rounded-circle image-circle d-flex justify-content-center align-items-center bg-danger mx-auto'>
                <Image  src={image}   className='mx-3 imagen-animation' alt="check" width={60} height={60} />
                {/* <Image */}
            </div>
            <div className="text-center my-3">
            <h3>{titulo}</h3>
                <p>{text}</p>
            </div>
        </div>
     );
}
 
export default Card;