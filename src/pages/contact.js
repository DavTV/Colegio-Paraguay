import Head from "next/head";

const Contact = () => {
    const handleSubmit=(e) => {
        e.preventDefault();
        alert("Formulario Enviado con éxito!");
    }
    return ( 
        <>
           <Head>
        <title>Contactanos</title>
        <meta name="description" content="Contáctate con el colegio republica de paraguay" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/colegioLogo.jpeg  " />
      </Head>
        <div className='py-3 bg-danger'></div>
        <form className="my-4 w-70-50 mx-auto " onSubmit={handleSubmit}>      
        <h3 className="my-5 text-center">Envianos un correo</h3>
        <hr/>
                <div className="mb-3 text-start ">
                    <label className="form-label">Nombre Completo <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" />
                </div>

                <div className="mb-3 text-start ">
                    <label className="form-label">Asunto <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" />
                </div>
            
                <div className="mb-3 text-start ">
                    <label className="form-label">Email <span className="text-danger">*</span></label>
                    <input type="e-mail" className="form-control" />
                </div>
                
                <div className="mb-3 text-start ">
                    <label className="form-label">Comentario </label>
                    <textarea className="form-control"></textarea>
                </div>
                <div className="mb-3 text-start ">
                    <button className="btn btn-danger">Enviar</button>
                </div>
            </form>
        </>
     );
}
 
export default Contact;