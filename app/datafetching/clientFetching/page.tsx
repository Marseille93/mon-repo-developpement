"use client";

import { useEffect, useState } from "react";
export default function page() {
    const [datas,setData]=useState(null);
    const [load,setLoad]=useState(false);

    useEffect(()=>{
        const fetchMaillot=async ()=>{
            const res=await fetch('https://66b8d9653ce57325ac784de3.mockapi.io/api/V1/maillots');
            const data=await res.json();
            setData(data)
            setLoad(true)
        }
        fetchMaillot();
    },[])
    return(
        <div className="flex justify-center">
           {load ? (datas.map(maillot=>(
      
      <div key={maillot.id} className="m-7">
        <h4>{maillot.title}</h4>
        <p>{maillot.description}</p>
      </div>
    
  ))):(<h3>Chargement...</h3>)}
        </div>
        
    );
}