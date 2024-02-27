import "../Cards/cards.css"

export default function Cards({data}) {
    return (
        <div className="col">
            <div className="card container-card d-flex flex-row justify-content-between align-items-center">
                <div className="d-flex flex-column justify-content-between align-items-center">
                <img src={data.image} className="i-card card-img-top" alt={data.name}/>
                <h2 className="t-title card-title text-center">{data.name}</h2>
                <button className="d-block b-card btn btn-active btn-x-md d-flex align-self-end">Know More..</button>
                </div>

            </div>
        </div>
    )
}
