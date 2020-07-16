import React, {useState} from 'react';
import Searchbar from './components/Searchbar'
import ResultingSearch from './components/ResultingSearch'
import Info from './components/Info'
import axios from 'axios'

function App() {
  const [searchTerm, setSearchTerm] = useState ({
    search: "",
    searchResults: [],
    selectedResult: {}
  })
  const baseurl = "https://api.themoviedb.org/3/search/movie?api_key=";
  const ak = process.env.REACT_APP_TMDB_API;
  const popupurl = "https://api.themoviedb.org/3/movie/";

  const userSearch = (e) => {
    if (e.key === "Enter") {
      document.getElementById('userInput').value = ''
      console.log(searchTerm.search)
      axios(baseurl+ak+"&query="+searchTerm.search).then(({ data }) => {
        let searchResults = data.results;
        
        setSearchTerm(prevState => {
          return { ...prevState, searchResults: searchResults }
        })
        console.log(searchTerm.searchResults);
      })
    }
  } 

  const popUpInfo = id => {
    axios(popupurl+id+"?api_key="+ak+"&append_to_response=credits,recommendations,tv").then(({ data }) => {
      let searchResults = data;
      console.log(searchResults)
      setSearchTerm(prevState => {
        return { ...prevState, selectedResult: searchResults }
      })
    })
  }

  const exitPopUp = () => {
    setSearchTerm(prevState => {
      return { ...prevState, selectedResult: {} }
    })
  }

  const inputHandler = (e) => {
    let search = e.target.value;

    setSearchTerm(prevState => {
      return { ...prevState, search: search }
    });

    //console.log(searchTerm.search);
  }

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Searchbar inputHandler={inputHandler} userSearch={userSearch} />
        <ResultingSearch searchResults={searchTerm.searchResults} popUpInfo={popUpInfo} />
        {(typeof searchTerm.selectedResult.title != "undefined") ? <Info selectedResult={searchTerm.selectedResult} exitPopUp={exitPopUp} /> : false }
      </main>
    </div>
  );
}

export default App;
