import '../BotonInicio/botonInicio.css';
import { Link } from 'react-router-dom';

export default function BotonInicio({nombreBoton, path}){
    return(
        <Link to={path} type="button" className="btnInicio b2 btn btn-secondary">
            {nombreBoton}
        </Link>

    )
}