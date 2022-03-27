import React from 'react'
import { useState } from 'react'

function SearchBar({onSearch}) {
    const [search, setSearch] = useState("")


    function handleSearch(e) {
        e.preventDefault()
        onSearch(search)
        setSearch("")
    }

    return (
        <form onSubmit={handleSearch}>
            <input type="text" name="name" placeholder='Search Ingredients' value={search}
                onChange={(e) => setSearch(e.target.value)} />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar