import React from 'react'
import { IoIosStar } from 'react-icons/io'

const imgurl = "https://image.tmdb.org/t/p/w500"
const bdurl = "https://image.tmdb.org/t/p/w1280"
const actorpic = "https://image.tmdb.org/t/p/w92"

const Info = ({ selectedResult, popUpInfo, exitPopUp }) => {
    console.log(selectedResult)
    const genres = selectedResult.genres.map((genrelist) => genrelist.name).reduce((prev, curr) => [prev, '/', curr])
    const casts = selectedResult.credits.cast.slice(0, 5).filter(v => v.profile_path !== null).map((castlist) => <img src={actorpic+castlist.profile_path}></img>)
    const castname = selectedResult.credits.cast.slice(0, 5).map((castnames) => <p>{castnames.name} as </p>)
    const castchar = selectedResult.credits.cast.slice(0, 5).map((castchars=[]) => <p>{castchars.character}</p>)
    return (
        console.log(castname),
       <section className="popup" 
                style={{ backgroundImage: `url(${bdurl+selectedResult.backdrop_path})`, backgroundPosition: 'top', backgroundSize: '80% 100%', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
            <button className="close" onClick={exitPopUp}>Back</button>
           <div className="poster-wrapper">
               <img className="poster" src={imgurl+selectedResult.poster_path} />
               
            </div>
            <div className="content-info">
                <h1>{selectedResult.title} <span>({selectedResult.release_date.substring(0,4)})</span></h1>
               <p className="rating"><IoIosStar size={30} className="rating-icon"/>&nbsp;&nbsp;{selectedResult.vote_average}</p>
               <p className="genre">{genres}</p>
               <p className="plot">{selectedResult.overview}</p>
            </div>

            <div className="cast">
                <div className="cast-wrap">
                    <ul>
                        {casts.map((imgitem, i) => <li className="castimg" key="i">{imgitem}{castname[i]}{castchar[i]}</li>)}
                    </ul>
                </div>   
            </div>

            <div className="runtime">
                <p>Runtime: {selectedResult.runtime} minutes</p>
            </div>
           
       </section>
    )
}

export default Info
