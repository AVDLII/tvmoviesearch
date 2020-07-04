import React, {useState} from 'react';
import Searchbar from './components/Searchbar'
import axios from 'axios'


function App() {
  const [state, setState] = useState({
    searchQ: "",
    selectedObject: {}
  });
  const url = "https://api.themoviedb.org/3/search/movie?";
  const apikey = process.env.REACT_APP_TMDB_API_KEY;

  const userSearch = (e) => {
    if(e.key === "Enter") {
      axios(url+"api_key="+apikey+"&query="+state.searchQ+"&page=1&include_adult=false").then(({data}) => {
        console.log(data);
        let result = data.Searchbar;

        setState(prevState => {
          return { ...prevState, results: result}
        })
      });
    }
  }


  const input = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, searchQ: s}
    });

    //console.log(state.searchQ);
  }

  return (
    <div className="App">
      <header>
        <h1>Movie and Tv Database</h1>
      </header>
      <main>
        <Searchbar input={input} userSearch={userSearch} />
      </main>
    </div>
  );
}

export default App;
