import { useState } from "react"

import VERBS from "../ressource/verbs"
import BasicModal from "./Modal";

const style = {
    backgroundColor: 'white',
    borderRadius: '8px',
    color: 'black',
}

export function SearchBar() {

    const [searchTerm, setSearchTerm] = useState("");

    const filteredVerbs = searchTerm ?
        VERBS.filter(verb =>
            verb.French.toLowerCase().includes(searchTerm.toLowerCase())
        ) : []

    const search = (e) => {
        setSearchTerm(e.target.value)
    }

    return <>
        <input
            className="text-center"
            placeholder='Ecris un verbe en français'
            type="search"
            onChange={search}
            value={searchTerm}
            style={style}
        />
        <BasicModal searchTerm={searchTerm} filteredVerbs={filteredVerbs} />
    </>
}