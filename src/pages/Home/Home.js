import BotonInicio from "../../components/BotonInicio"

export default function Home() {
    return (
        <header className="d-grid container-fluid  vh-100 ">
            <div className="bg-light bg-opacity-75 align-self-center bgConteiner">
                <h1 className="text t-1 text-center">Proyect Rick & Morty </h1>
                <h2>Helcome to Rick & Morty Proyect!</h2>
                <p className="text-center">This proyect was made for practising React and to made a functional website</p>
                <p className="text-center">In this website you can know information of the characters of this animated series.</p>
                <p className="text-center">Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion</p>
                <p>Lets go!</p>
                <BotonInicio nombreBoton='Characters' path='/characters'/>
                <BotonInicio nombreBoton='Contact' path='/contact'/>
            </div>
        </header>
    )
}