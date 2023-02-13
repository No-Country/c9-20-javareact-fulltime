import React from 'react'

export default function MisPedidos() {
    
    //Este array es momentaneo hasta poder consumir esta informacion de la API
    let infodeApi = ['Pedido 1','Pedido 2', 'Pedido 3']
  
    return (
    <div>
       <h5>Historial de pedidos:</h5>    
        { infodeApi.map(e=> <p>{e}</p> )}
    </div>
  )
}
