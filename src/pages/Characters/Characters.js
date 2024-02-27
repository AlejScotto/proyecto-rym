import NavBarComponent from "../../components/Nav";
import Cards from "../../components/Cards";
import Filtro from "../../components/filtro";
import { useState, useEffect } from 'react';

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
            <Filtro param="Alive" a="status" onFiltroChange={handleFiltroChange} />
            <Filtro param="Male" a="gender" onFiltroChange={handleFiltroChange} />

            <div className="row row-cols-1 row-cols-md-3 g-4">
                {data.map(item => (
                    <Cards key={item.id} data={item} />
                ))}
            </div>
        </>
    );
}