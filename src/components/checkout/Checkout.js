import React, { useContext, useState } from 'react'
import { CartContext } from '../CartContext/CartContext'
import { useForm } from 'react-hook-form'
import "./Checkout.css"
import { addDoc, collection, doc } from 'firebase/firestore'
import { db } from '../../firebase/config'
export const Checkout = () => {

    const {carrito, precioFinal, carritoVaciar} = useContext(CartContext)
    const { register , handleSubmit} = useForm()
    const [pedido, setPedido] = useState()

    const pedidoInfo = (dt) =>{
        const pedido = {
            cliente: dt,
            productos: carrito,
            total: precioFinal()
        }
            const pedidos = collection(db, "pedidos")
            addDoc(pedidos, pedido)
            .then((doc) =>{
                setPedido(doc.id)
                carritoVaciar()
            })
}
    if(pedido){
        return(
            <div className='container-pedido'>
                <h2>Gracias por comprar en NexGenStore</h2>
                <p>Tu Pedido ha sido enviado con exito.
                    El número de tu pedido es : {pedido}
                </p>
            </div>
        )
    }
            

  return (
    <div>
        <h2 className='titulo-check'>Ingresa tus datos antes de finalizar.</h2>
        <form className='form-compra' onSubmit={handleSubmit(pedidoInfo)}>

            
        <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input type='text' placeholder='Email' {...register("email")}/>
            <input type='text' placeholder='Numero de telefono' {...register("telefono")}/>
            <button className="enviar-compra" type="submit">Comprar</button>
        </form>
    </div>
  )
}

