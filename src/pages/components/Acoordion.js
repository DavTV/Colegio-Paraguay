const Acoordion = ({taller}) => {
    const {objetivos, dirigido,horariosHombres,horariosMujeres,contenidos, docentes, costo} = taller;
    return ( 
        <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed text-danger h2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Objetivos
                    </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse " aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <ul>
                            {objetivos.map((objetivo,index)=>{
                                return <li className="my-3" key={index+"obj"}>{objetivo}</li>
                            }) }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed text-danger h2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Dirigido a
                    </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">{
                        <ul>
                            <li>
                                {dirigido.edades}
                            </li>
                            <li>
                                {dirigido.nota}
                            </li>
                        </ul>
                    }</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed text-danger h2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Horario
                    </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse p-3" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <p>Hombre</p>
                    <ul>
                            {horariosHombres.map((horario,index)=>{
                                return <li key={index+"horh"}>{horario}</li>
                            })}                        
                    </ul>

                    <p>Mujeres</p>
                    <ul>
                            { horariosMujeres.map((horario,index)=>{
                                return <li key={index+"horm"}>{horario}</li>
                            })}                        
                    </ul>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFour">
                    <button className="accordion-button collapsed text-danger h2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                        Contenido
                    </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">{
                        <ul>
                            {
                               contenidos.map((texto,index)=>{
                                    return    <li key={index+"text"}>
                                        {texto}
                                    </li>

                                })
                            }
                            
                        </ul>
                    }</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFive">
                    <button className="accordion-button collapsed text-danger h2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                        Docentes
                    </button>
                </h2>
                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">{
                        <ul>
                            {
                                docentes? docentes.map((docente,index)=>{
                                    return    <li key={index+"doc"}>
                                        {docente}
                                    </li>

                                }): <p>No hay datos aún.</p>
                            }
                            
                        </ul>
                    }</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingSix">
                    <button className="accordion-button collapsed text-danger h2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                        Costo
                    </button>
                </h2>
                <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">{
                        <ul>
                             <li>
                                       S/    {costo}
                                    </li>

                              
                            
                            
                        </ul>
                    }</div>
                </div>
            </div>
            
        </div>
     );
}
 
export default Acoordion;