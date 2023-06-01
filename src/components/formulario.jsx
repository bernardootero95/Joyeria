import React, { useEffect, useState } from 'react'
import { db } from '../Firebase';
import { collection, doc, addDoc, onSnapshot, deleteDoc, updateDoc } from 'firebase/firestore'



const Formulario = () => {
    const [cantidad, setCantidad] = useState('');
    const [material, setMaterial] = useState('');
    const [dije, setDije] = useState('');
    const [tipo, setTipo] = useState('');
    const [moneda, setMoneda] = useState('');
    const [valorAPagar, setValorAPagar] = useState('');
    const [listarJoyas, setListarJoyas] = useState([])
  
    useEffect(() => {
      const obtenerDatos = async() =>{
        try{
            await onSnapshot(collection(db, 'JOYAS'), (query) =>{
                setListarJoyas(query.docs.map((doc)=>({...doc.data(), id:doc.id})))
            })

        }catch(error){
            console.log(error)
        }
      }

      const buscarJoya = () =>{
        const joyaEncontrada = listarJoyas.find((joya) => joya.material === material && joya.dije === dije && joya.tipo === tipo)
        if (joyaEncontrada){
          if(moneda === "pesos"){
            setValorAPagar(joyaEncontrada.valor * cantidad * 5000);
          }else{
            setValorAPagar(joyaEncontrada.valor * cantidad );
          }
        }
      }
      obtenerDatos();
      if(material && dije && tipo && cantidad && moneda){
        
        buscarJoya()
      }
    }, [material,dije,tipo,cantidad,moneda]);
    
    
   
    return (
    <div className='container'>
      <h1 className="text-center">JOYERIA BO</h1>
        <form >
          <div className="form-group">
            <label htmlFor="material">Material:</label>
            <select className="form-control" id="material" value={material} onChange={(e) => setMaterial(e.target.value)}>
              <option value="">Seleccione un material</option>
              <option value="cuero">Cuero</option>
              <option value="cuerda">Cuerda</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="dije">Dije:</label>
            <select className="form-control" id="dije" value={dije} onChange={(e) => setDije(e.target.value)} >
              <option value="">Seleccione un dije</option>
              <option value="martillo">Martillo</option>
              <option value="ancla">Ancla</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="tipo">Tipo:</label>
            <select className="form-control" id="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)} >
              <option value="">Seleccione un tipo</option>
              <option value="oro">Oro</option>
              <option value="plata">Plata</option>
              <option value="niquel">Niquel</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="cantidad">Cantidad:</label>
            <input type="number" className="form-control" id="cantidad" value={cantidad} onChange={(e) => setCantidad(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="moneda">Moneda:</label>
            <select className="form-control"  id="moneda" value={moneda} onChange={(e) => setMoneda(e.target.value)}>
              <option value="">Seleccione una moneda</option>
              <option value="dolares">Dólares</option>
              <option value="pesos">Pesos</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="valorAPagar">Valor a pagar:</label>
            <input type="text" className="form-control" id="valorAPagar" value={valorAPagar} disabled />
          </div>
          <button type="submit" className="btn btn-primary">Realizar compra</button>
        </form>
    </div>
        
  
  
    )
}




export default Formulario