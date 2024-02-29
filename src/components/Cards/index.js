import { useState } from "react";
import "../Cards/cards.css"
import Description from "../Description/index";

export default function Cards({ infoPersonaje }) {
    let [hide,setHide]=useState (true);

    const showMore=()=>{
        setHide(false)
    }
  
    return (
        <div className="col d-flex justify-content-center">
            <div className=" container-card d-flex flex-row justify-content-between aling-items-center">
                <div className="d-flex flex-column justify-content-between aling-items-center">
                    <img src={infoPersonaje.image} className="i-card card-img-topp" alt={infoPersonaje.name} />
                    <h2 className="t-title card-title text-center">{infoPersonaje.name}</h2>
                    <button className="d-block b-card btn btn-active btn-x-md d-flex align-self-end" onClick={showMore}>Know More..</button>
                </div>
                {
                hide === false? <Description status={infoPersonaje.status} especie={infoPersonaje.species} genero={infoPersonaje.gender} origen={infoPersonaje.origin.name} setHide={setHide}/>:''
                }
            </div>
        </div>
    )
}
