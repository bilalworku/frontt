const KEY = "3fd2be6f0c70a2a598f084ddfb75487c";
// For educational purposes only - DO NOT USE in production
// Request your own key for free: https://developers.themoviedb.org/3
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${KEY}&page=1`;
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=`;

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// this function will return the class name based on the rate
const getClassByRate = (vote) => {
  if (vote >= 7.5) return "green";
  else if (vote >= 7) return "orange";
  else return "red";
};

// this function will show the movies on the screen
const showMovies = (movies) => {
  main.innerHTML = "";
  // create a movie element for each movie
  movies.forEach((movie) => {
    // get the title, poster_path, vote_average, and overview from the movie object
    const { title, poster_path, vote_average, overview } = movie;
    // create a div element with the class movie
    const movieElement = document.createElement("div");
    // add the movie class to the div element
    movieElement.classList.add("movie");
    movieElement.innerHTML = `
    <img
      src="${IMG_PATH + poster_path}"
      alt="${title}"
    />
    <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getClassByRate(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
      <h3>Overview</h3>
      ${overview}
    </div>
  `;
    main.appendChild(movieElement);
  });
};

// this function will fetch the movies from the API and return the json data.
const getMovies = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
};

getMovies(API_URL);

// add an event listener to the form element
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  // if the search term is not empty, call the getMovies function with the SEARCH_API + searchTerm
  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);
    // clear the search input
    search.value = "";
  } else history.go(0); // if the search term is empty, reload the page.
});
