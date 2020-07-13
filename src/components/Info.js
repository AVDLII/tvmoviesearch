import React from 'react'
const imgurl = "https://image.tmdb.org/t/p/w500"
const bdurl = "https://image.tmdb.org/t/p/w780"

const Info = ({ selectedResult, exitPopUp }) => {
    console.log(selectedResult)
    
    return (
       <section className="popup">
           <div className="content">
               <h1>{selectedResult.title}<span>({selectedResult.release_date.substring(0,4)})</span></h1>
               <p className="rating">Rating: {selectedResult.vote_average}</p>
               <div className="plot">
                   <img className="poster" src={imgurl+selectedResult.poster_path} />
                   <img className="cover" src={bdurl+selectedResult.backdrop_path} />
                   <p>{selectedResult.overview}</p>
                   <p>{selectedResult.credits.cast[0].name} as {selectedResult.credits.cast[0].character}</p>
               </div>
               <button className="close" onClick={exitPopUp}>Close</button>
           </div>
       </section>
    )
}

export default Info
