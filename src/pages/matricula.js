const Matricula = () => {
    const handleSubmit=(e) => {
        e.preventDefault();
        alert("Formulario Enviado con éxito!");
    }
    return ( 
    <>
         <Head>
        <title>Matriculate</title>
        <meta name="description" content="Contáctate con el colegio republica de paraguay" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/colegioLogo.jpeg  " />
      </Head>
        <div className='py-3 bg-danger'></div>
        <div className="container text-center">
            <h2 className="my-5">Matriculate en nuestro ciclo 2023</h2>
            {/* <hr/> */}
            <form className="my-4 w-70-50 mx-auto " onSubmit={handleSubmit}>
                <h3 className="my-5">Datos del postulante</h3>
                <hr/>
                <div className="mb-3 text-start ">
                    <label className="form-label">Apellidos <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3 text-start">
                    <label className="form-label">Nombres <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3 text-start">
                    <label className="form-label">Fecha de nacimiento <span className="text-danger">*</span></label>
                    <input type="date" className="form-control" />
                </div>
                <div className="text-start mb-3 text-start">

                <label className="form-label ">Sexo <span className="text-danger">*</span></label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" / >
                    <label class="form-check-label" htmlFor="flexRadioDefault1">
                        Masculino
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  />
                <label class="form-check-label" for="flexRadioDefault2">
                    Femenino
                </label>
                </div>
                </div>
                <div className="mb-3 text-start ">
                    <label className="form-label">postulante a <span className="text-danger">*</span></label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Abrir y seleccionar</option>
                        <option DefaultValue="inicial-3">inicial - 3 años</option>
                        <option DefaultValue="inicial-4">inicial - 4 años Pre-K</option>
                        <option DefaultValue="inicial-5">inicial - 5 años Kinder</option>
                        <option DefaultValue="primaria-1">primaria - primer grado</option>
                        <option DefaultValue="primaria-2">primaria - segundo grado</option>
                        <option DefaultValue="primaria-3">primaria - tercero grado</option>
                        <option DefaultValue="primaria-4">primaria - cuarto grado</option>
                        <option DefaultValue="primaria-5">primaria - quinto grado</option>
                        <option DefaultValue="primaria-6">primaria - sexto grado</option>
                        <option DefaultValue="secundaria-1">secundaria - primer grado</option>
                        <option DefaultValue="secundaria-2">secundaria - segundo grado</option>
                        <option DefaultValue="secundaria-3">secundaria - tercero grado</option>
                        <option DefaultValue="secundaria-4">secundaria - cuarto grado</option>
                        <option DefaultValue="secundaria-5">secundaria - quinto grado</option>
                    </select>
                </div>
                <h3 className="my-5">Datos del apoderado</h3>
                <hr/>
                <div className="mb-3 text-start ">
                    <label className="form-label">Apellidos <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3 text-start ">
                    <label className="form-label">Nombres <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3 text-start ">
                    <label className="form-label">Email <span className="text-danger">*</span></label>
                    <input type="e-mail" className="form-control" />
                </div>
                <div className="mb-3 text-start ">
                    <label className="form-label">Teléfono <span className="text-danger">*</span></label>
                    <input type="tel" className="form-control" />
                </div>
                <div className="mb-3 text-start ">
                    <label className="form-label">Comentario </label>
                    <textarea className="form-control"></textarea>
                </div>
                <div className="mb-3 text-start ">
                    <button className="btn btn-danger">Enviar</button>
                </div>
            </form>
        </div>
    
    
    </>
     );
}
 
export default Matricula;