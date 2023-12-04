import React from 'react'
import "./Contacto.css"
const Contacto = () => {
  return (
    <><div>
          <h1  style={{paddingTop: "80px", color:"#ffab40"}}  className='titulo-contacto'>Ponte en contacto</h1>
      </div><div className="row">
              <form className="col s12">
                  <div className="row">
                      <div className="input-field label col s6">
                        <i className="material-icons prefix">account_circle</i>
                          <input id="first_name icon_prefix" type="text" className="validate"></input>
                          <label htmlFor="first_name icon_prefix">Nombres</label>
                      </div>
                      <div className="input-field col s6">
                        <i className="material-icons prefix">account_circle</i>
                          <input id="last_name icon_prefix" type="text" className="validate"></input>
                          <label htmlFor="last_name icon_prefix">Apellidos</label>
                      </div>
                  </div>
                  <div className="row">
                      <div className="input-field col s12">
                          <i className="material-icons prefix">phone</i>
                          <input placeholder="(+54)"id="disabled icon_phone" type="number" className="validate"></input>
                          <label htmlFor="telefono icon_phone" data-error="wrong" data-success="right">Teléfono</label>
                      </div>
                  </div>
                  <div className="row">
                      <div className="input-field col s12">
                          <i className="material-icons prefix">mode_edit</i>
                          <input id="asunto icon_prefix2" type="text" className="validate"></input>
                          <label htmlFor="asunto icon_prefix2">Asunto</label>
                      </div>
                  </div>
                  <div className="row">
                      <div className="input-field col s12">
                          <i className="material-icons prefix">email</i>
                          <input id="email icon_prefix" type="email" className="validate"></input>
                          <label htmlFor="email icon_prefix" data-error="wrong" data-success="right">Email</label>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col s12">
                         
                          <div className="input-field inline">
                          <button className="btn waves-effect waves-light boton-contacto" type="submit" name="action">Enviar
                                <i className="material-icons right">send</i>
                            </button>
                          </div>
                      </div>
                  </div>
              </form>
          </div></>
  )
}

export default Contacto