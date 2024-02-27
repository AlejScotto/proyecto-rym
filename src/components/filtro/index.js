import React, { useState } from 'react';

export default function Filtro({ param, onFiltroChange }) {
    const [filtro, setFiltro] = useState("All"); // Inicializado como "All" por defecto

    const handleFiltroChange = () => {
        const nuevoFiltro = filtro === "All" ? param : "All"; // Cambia el filtro entre "All" y "Alive"
        setFiltro(nuevoFiltro);
        onFiltroChange(nuevoFiltro); // Llama a la función proporcionada por el padre con el nuevo filtro
        console.log("FILTRO",filtro)
    };

    return (
        <div>
            <input
                type="checkbox"
                role='switch'
                value={"Alive"}
                checked={filtro === param }
                onChange={handleFiltroChange}
            />
            <label htmlFor="">Character Alive</label>
        </div>
    );
}
