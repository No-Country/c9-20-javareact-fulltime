import React from 'react'
import './MiCuenta.css'
import MisDatos from './MisDatos/MisDatos'

export default function MiCuenta() {
  const [misDatos, setMisDatos] = React.useState(false)
  const [misTarjetas, setMisTarjetas] = React.useState(false)
  const [misPedidos, setMisPedidos] = React.useState(false)
  const [cerrarSesion, setCerrarSesion] = React.useState(false) 
  
  const activacion = (e) => {
    console.log(e.target.name)
    let boton = e.target.name
    switch (boton){
      case 'Datos':
        setMisDatos(true)
        setMisTarjetas(false)
        setMisPedidos(false)
        setCerrarSesion(false)
        break;
      case 'Tarjetas':
        setMisDatos(false)
        setMisTarjetas(true)
        setMisPedidos(false)
        setCerrarSesion(false)
        break;
      case 'Pedidos':
        setMisDatos(false)
        setMisTarjetas(false)
        setMisPedidos(true)
        setCerrarSesion(false)
        break;
      case 'Sesion':
        setMisDatos(false)
        setMisTarjetas(false)
        setMisPedidos(false)
        setCerrarSesion(true)
        break;
      default:
        null
    }
      
  }
  
  return (
    <div className='MiCuenta'>
        <h1>MiCuenta</h1>
        <div className='Container'>
            <div className='Seleccion'>
              <button name='Datos' onClick={(e) => activacion(e)}>Mis datos</button>
              <button name='Tarjetas' onClick={(e) => activacion(e)}>Mis tarjetas</button>
              <button name='Pedidos' onClick={(e) => activacion(e)}>Mis pedidos</button>
              <button name='Sesion' onClick={(e) => activacion(e)}>Cerrar Sesión</button>
            </div>
            <div>
              
              { misDatos && <MisDatos/>}
              { misTarjetas && 'Mis tarjetas componente'}
              { misPedidos && 'Mis pedidos componente'}
              { cerrarSesion && 'Mi cerrar  sesion componente'}                            
            </div>
        </div>
    </div>
  )
}
