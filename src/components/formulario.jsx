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
    </div>
        
  
  
    )
}




export default Formulario