function createMovieCard(movie) {
  const card = document.createElement("div");
  card.className = "movie-card";
  card.dataset.id = movie.id;

  card.innerHTML = `
    <h3 class="movie-title">${movie.title}</h3>
    <span class="movie-genre">${movie.genre}</span>
  `;

  return card;
}

function renderMovies(movieList) {
  const container = document.getElementById("movie-list");
  container.innerHTML = "";

  movieList.forEach((movie) => {
    container.appendChild(createMovieCard(movie));
  });
}

renderMovies(movies);
