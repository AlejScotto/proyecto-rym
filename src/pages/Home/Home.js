import './Home.css'
import BotonInicio from "../../components/BotonInicio"

export default function Home() {
    return (
        <header className="d-grid container-fluid  vh-100 ">
            <div className="align-self-center bgContainer text-center">
                <h1 className="text t-1 text-center">Proyect Rick & Morty </h1>
                <h2 className="text t-2 text-center mt-4">Welcome to Rick & Morty Proyect!</h2>
                <p className="text-center t-3">This proyect was made for practising React and to made a functional website</p>
                <p className="text-center t-4">In this website you can know information of the characters of this animated series.</p>
                <p className="text-center t-6">Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion</p>
                <h2 className="text-center t-5">Lets go!</h2>
                <div className="containerbutton d-flex justify-content-center">
                    <BotonInicio nombreBoton='Characters' path='/characters'/>
                    <BotonInicio nombreBoton='Contact' path='/contact'/>
                </div>
            </div>
        </header>
    )
}