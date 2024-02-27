import './nav.css'
import { NavLink  } from "react-router-dom";
import list from '../../assets/list.svg';

export default function NavBarComponent(){
    return(
    <>
    <nav className="container-nav navbar navbar-expand-lg w-100">
        <div className="container-fluid justify-content-between aling-items-center">
          <NavLink to="/" className=" text-decoration-none">
            <h1 className="t-rm navbar-brand cursor-p">Rick &amp; Morty</h1>
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <img src={list} alt="Nav" className="ico-h"/>
          </button><div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="container-items nav nav-pills">
              <li className="nav-item">
                <NavLink to="/characters" className="nav-link text-decoration-none bc-hover bc-1 d-flex justify-content-center" activeclassname="bc1">Characters</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link text-decoration-none bc-2 bc-hover d-flex justify-content-center" activeclassname="bc1">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
    )
}