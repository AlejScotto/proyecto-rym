import React, { useState } from 'react';
import './filtro.css';

export default function Filtro({title,filterName,filterCharacter}) {
   
    return(
        <div className="form-check form-switch">
            <input className="form-check-input" 
                type="checkbox" 
                role="switch" 
                id={filterName} 
                value={filterName} 
                onClick={(event)=>filterCharacter(event.target)} 
            />
            <label className="form-check-label" htmlFor={filterName}>{title}</label>
        </div>
    )
}
