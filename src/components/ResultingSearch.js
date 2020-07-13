import React from 'react'
import ResultGrid from './ResultGrid'

const ResultingSearch = ({ searchResults, popUpInfo }) => {
    return (
        console.log(searchResults),
        <section className="search-results">
            {searchResults.filter(v => v.poster_path !== null).map(resultGrid => (
                <ResultGrid key={resultGrid.id} resultGrid = { resultGrid } popUpInfo={popUpInfo} />
            ))}
        </section>
    )
}

export default ResultingSearch