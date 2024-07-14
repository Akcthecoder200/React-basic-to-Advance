import React, { useState } from 'react';
// import Moviedetails from './components/Moviedetails/Moviedetails.jsx';
//  import Loading from './Loading';

function Webserieshub() {
  const [searchText, setSearchText] = useState("");
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getMovieData = async () => {
    setLoading(true);
    let url = `https://www.omdbapi.com/?t=${searchText}&plot=full&apikey=b9bc8477`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setMovieData(parsedData);
    setLoading(false);
  };

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <div className="mx-auto w-75">
        <div className="row">
          <input
            type="text"
            className="col-sm-4 p-2 m-2 border border-blue-900"
            placeholder="Webseries Name"
            aria-label="Webseries Name"
            value={searchText}
            onChange={handleChange}
          />
          <button onClick={getMovieData} className="btn btn-primary p-2 m-2 col-sm-2 border border-red-500 text-black bg-red-600">
            Search
          </button>
        </div>
      
     </div>
     {loading && <p>Loading...</p>}
     {/* {!loading && movieData && <Moviedetails data={movieData} loading={loading}/>} */}

{movieData && !loading && (
  <div className=" flex  my-2 mx-4 bg-dark text-light">
    <img src={movieData.Poster} alt="Poster Not awailable" className="mw-50"/>
    <div className="border w-100">
        <h2 className="text-center bg-light text-dark">{movieData.Title}({movieData.Year})</h2>
        <p className="m-2"><span className="text-warning">Plot</span> : {movieData.Plot}</p>
        <div className="d-lg-flex">
            <div className="w-lg-50">
                <p className="m-2"><span className="text-warning">Actors</span> : {movieData.Actors}</p>
                <p className="m-2"><span className="text-warning">Director</span> : {movieData.Director}</p>
                <p className="m-2"><span className="text-warning">Writer</span> : {movieData.Writer}</p>
                <p className="m-2"><span className="text-warning">Genre</span> : {movieData.Genre}</p>
                <p className="m-2"><span className="text-warning">Languages</span> : {movieData.Language}</p>
            </div>
            <div className="w-lg-50">
                <p className="m-2"><span className="text-warning">IMDB Rating</span> : {movieData.imdbRating}</p>
                <p className="m-2"><span className="text-warning">Rated</span> : {movieData.Rated}</p>
                <p className="m-2"><span className="text-warning">Awards</span> : {movieData.Awards}</p>
                <p className="m-2"><span className="text-warning">Released</span> : {movieData.Released}</p>
                <p className="m-2"><span className="text-warning">Box Office</span> : {movieData.BoxOffice}</p>
            </div>
        </div>
    </div>
    </div>
    )
    }

        
        </>
      
    
  )
}

export default Webserieshub;


