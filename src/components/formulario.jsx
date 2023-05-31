import React, { useEffect, useState } from 'react'

const formulario = () => {
    const [material, setMaterial] = useState('')
    const [dije, setDije] = useState('')
    const [tipo, setTipo] = useState('')
    const [joyas, setJoyas] = useState([])

    useEffect(()=>{
        const obtenerDatos = async() => {
            try{
                await onSnapshot(collection(db, 'JOYAS'), (query) =>{
                    setJoyas(query.docs.map((doc)=>({...doc.data(), id:doc.id})))
                })

            }catch(error){
                console.log(error)
            }
        }
    })
  
  
    return (
    <div>formulario</div>
        
  
  
    )
}




export default formulario