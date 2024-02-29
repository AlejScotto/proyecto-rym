import "../Description/description.css"
export default function Description({status,especie,genero,origen,setHide}) {
    return (
        <div className="description d-flex flex-column align-items-center">
            <div className="d-flex w-100 justify-content-end">
                <button className="btn btn-success" onClick={()=>setHide(true)}>X</button>
            </div>
        <ul className="list-group p-2">
            <li className="container-item p-3 d-flex flex-column list-group-item">
                <h4 className="h4-info m-0">Character Status</h4>
                <p className="p-info fw-bold m-0">{status}</p>
            </li>
            <li className="container-item p-3 d-flex flex-column list-group-item">
                <h4 className="h4-info m-0">Species</h4>
                <p className="p-info fw-bold m-0">{especie}</p>
            </li>
            <li className="container-item p-3 d-flex flex-column list-group-item">
                <h4 className="h4-info m-0">Origin</h4>
                <p className="p-info fw-bold m-0">{origen}</p>
            </li>
            <li className="container-item p-3 d-flex flex-column list-group-item">
                <h4 className="h4-info m-0">Gender</h4>
                <p className="p-info fw-bold m-0">{genero}</p>
            </li>
        </ul>
        </div>
    )
}