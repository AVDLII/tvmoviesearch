import React from 'react'

function Searchbar({input, userSearch}) {
    return (
        <section className="searchbox-wrap">
            <input type="text" placeholder="Search" className="searchbox" onChange={input}
            onKeyPress={userSearch}/>
        </section>
    )
}

export default Searchbar
