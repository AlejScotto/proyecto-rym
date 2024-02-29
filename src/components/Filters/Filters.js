import { Fragment } from "react";

import Filter from "../Filter/Filter";

export default function Filters({filterCharacter}) {

    return(
        <Fragment>
            <div className="filter-section mx-4 mt-5">
                <h2 className="mb-3">Filters</h2>
                <form className="c-form d-flex justify-content-between">
                    <Filter filterName="Alive" title="Character Alive" filterCharacter={filterCharacter}/>
                    <Filter filterName="Dead" title="Character Dead" filterCharacter={filterCharacter}/>
                    <Filter filterName="Female" title="Female" filterCharacter={filterCharacter}/>
                    <Filter filterName="Male" title="Male" filterCharacter={filterCharacter}/>
                    <Filter filterName="Unknown" title="Origin Unknown" filterCharacter={filterCharacter}/>
                </form>
            </div>
         
        </Fragment>

    )
}