import TheMovieDBSource from '../../data/themoviedb-source';
import { createMovieItemTemplate } from '../templates/template-creator';

const NowPlaying = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Now Playing in Cinema</h2>
        <div id="movies" class="movies">
        </div>
      </div>
    `;
  },

  async afterRender() {
    try {
      const movies = await TheMovieDBSource.nowPlayingMovies();
      const movieContainer = document.querySelector('#movies');
      movies.forEach((movie) => {
        movieContainer.innerHTML += createMovieItemTemplate(movie);
      });
    } catch (err) {
      console.error({ err });
    }
  },
};

export default NowPlaying;
