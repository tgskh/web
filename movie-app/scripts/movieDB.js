const movieDBBaseLink = 'https://api.themoviedb.org/3/';
const requestOptions = {
  movieList: 'discover/movie',
  tvList: 'discover/tv',
}

const baseFilter = '?include_video=true&language=en-US';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmYxZjFhMzhjYmQ5YjM5OGRhYjM5OWIxNDcyYmFiMyIsInN1YiI6IjY1MmE4YWVhZWE4NGM3MDE0ZTA0YzI5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1KC4mwQFI9ETZGG8bQauScjE9FHHQvciS9_czCLgGns'
  }
};

const urlToFetchStart = `${movieDBBaseLink}${requestOptions.movieList}${baseFilter}`;

const genres = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western"
}

async function getMovies () {
  try {
    const result = await fetch(urlToFetchStart, options);
    const movies = await result.json();
    console.log(movies); console.log('-------------');
    return movies.results;
  } catch (error) {
    console.log(error);
  }
}

async function renderMovies () {
  const container = document.querySelector('.movie-list');
  const mainMovie = document.querySelector('.main-movie');
  const movieList = await getMovies();
  const movieObj = [];
  for (let i =0; i<8; i++) {
    movieObj.push(`<div class=movie-item
    style="  background: url('https://image.tmdb.org/t/p/original/${movieList[i].backdrop_path}') lightgray 50% / cover no-repeat;">

      <div class="movie-short">
        <p class="movie-name">${movieList[i].original_title}</p>
        <p class="movie-info">
          ${movieList[i].release_date.slice(0,4)} | 
          ${genres[movieList[i].genre_ids[0]]}
        </p>
      </div>
    </div>`);
  }
  container.innerHTML = movieObj.join('');
  const movieSelect = Math.floor(Math.random()*20);
  mainMovie.innerHTML = `
    <h1>${movieList[movieSelect].original_title}</h1>
    <p>${movieList[movieSelect].release_date.slice(0,4)} 
    | ${genres[movieList[movieSelect].genre_ids[0]]}</p>
    <div class="watch-button">
    <a href="">WATCH</a>
    </div>
    `
  
}

renderMovies ();


