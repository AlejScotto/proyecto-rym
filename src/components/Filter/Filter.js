
export default function Filter({ title, filterName, filterCharacter }) {
  return (
    <div className="filter-2 rounded-3 form-check form-switch">
      <input
        className="input-form form-check-input"
        type="checkbox"
        role="switch"
        id={filterName}
        value={filterName}
        onClick={(event) => filterCharacter(event.target)}
      />
      <label className="form-check-label" htmlFor={filterName}>
        {title}
      </label>
    </div>
  );
  }