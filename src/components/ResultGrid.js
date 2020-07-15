import React from 'react'
const imgurl = "https://image.tmdb.org/t/p/w342"

const ResultGrid = ({ resultGrid, popUpInfo }) => {
    return (
        <div className="results" onClick={() => popUpInfo(resultGrid.id)}>
            <img src={imgurl+resultGrid.poster_path} alt={resultGrid.title}/>
            <h3>{resultGrid.title}</h3>
        </div>
    )
} 

export default ResultGrid
