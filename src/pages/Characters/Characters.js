import { useState, useEffect } from 'react';
import NavBarComponent from "../../components/Nav";
import Cards from "../../components/Cards";
import Filtro from "../../components/filtro";
import './characters.css';

export default function Characters() {
    const [data, setData] = useState([]);
    const [filtro, setFiltro] = useState("All"); // Inicializado como "All" por defecto

    useEffect(() => {
        getPersonajes(filtro);
    }, [filtro]);

    const getPersonajes = async () => {
        console.log("FILTRO",filtro)
        try {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const responseData = await response.json();

            // Filtra los personajes según el estado ("Alive" o "All")
            const personajesFiltrados = filtro === "All"
                ? responseData.results
                : responseData.results.filter(personaje => personaje.status === filtro);

            setData(personajesFiltrados);
            console.log(personajesFiltrados);
        } catch (error) {
            console.error(error);
        }
    };

    const handleFiltroChange = (nuevoFiltro) => {
        console.log("AAA", nuevoFiltro)
        setFiltro(nuevoFiltro);
    };

    return (
        <>
            <NavBarComponent />
            <div className="filter-section mx-4 mt-5" >
                <h2 className='mb-3'>Filters</h2>
                <div className="c-form d-flex justify-content-between">
                    <Filtro param="Alive" a="status" text="Character Alive" onFiltroChange={handleFiltroChange} />
                    <Filtro param="Male" a="gender" text="Character Dead" onFiltroChange={handleFiltroChange} />
                    <Filtro param="Alive" a="status" text="Female" onFiltroChange={handleFiltroChange} />
                    <Filtro param="Male" a="gender" text="Male" onFiltroChange={handleFiltroChange} />
                    <Filtro param="Alive" a="status" text="Origin Unknown" onFiltroChange={handleFiltroChange} />
                </div>
            </div>

            <div className="section-cards d-flex aling-items-center m-0 row justify-content-center w-100 pt-5">
                {data.map(item => (
                    <Cards key={item.id} data={item} />
                ))}
            </div>
        </>
    );
}