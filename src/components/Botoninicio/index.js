import '../BotonInicio/botonInicio.css';
import { Link } from 'react-router-dom';

export default function BotonInicio({nombreBoton, path}){
    return(
        <Link to={path} className="btnInicio">{nombreBoton}</Link>
    )
}