import React from 'react'
import { IoIosStar } from 'react-icons/io'

const imgurl = "https://image.tmdb.org/t/p/w500"
const bdurl = "https://image.tmdb.org/t/p/w780"

const Info = ({ selectedResult, popUpInfo, exitPopUp }) => {
    console.log(selectedResult)
    const genres = selectedResult.genres.map((genrelist) => genrelist.name).reduce((prev, curr) => [prev, '/', curr])
    const casts = selectedResult.credits.cast.slice(0, 5).map((castlist) => <img src={imgurl+castlist.profile_path}></img>)
    const castname = selectedResult.credits.cast.slice(0, 5).map((castnames) => castnames.name)
    const castchar = selectedResult.credits.cast.slice(0, 5).map((castchars) => castchars.character)
    
    return (
        console.log(castname),
       <section className="popup">

           <div className="poster-wrapper">
               <img className="poster" src={imgurl+selectedResult.poster_path} />
               
            </div>
            <div className="content-info">
                <h1>{selectedResult.title}<span>({selectedResult.release_date.substring(0,4)})</span></h1>
               <p className="rating"><IoIosStar size={30} className="rating-icon"/>&nbsp;&nbsp;{selectedResult.vote_average}</p>
               <p className="genre">{genres}</p>
               <p className="plot">{selectedResult.overview}</p>
            </div>

            <div className="cast">
                <ul>
                    <li>
                        <figure>
                            {casts}
                        </figure>
                    </li>
                </ul>
            </div>
               
            <button className="close" onClick={exitPopUp}>Close</button>
           
       </section>
    )
}

export default Info
