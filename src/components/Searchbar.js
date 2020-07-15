import React from 'react'
import { FiSearch } from 'react-icons/fi'

const Searchbar = ({ inputHandler, userSearch }) => {
    return (
       <section className="searchbox-wrapper">
           <input type="text" 
           id="userInput"
           placeholder="Search title" 
           className="searchbox"
           onChange={inputHandler}
           onKeyPress={userSearch}/><FiSearch className="search-icon" />
       </section>
    )
}
export default Searchbar
