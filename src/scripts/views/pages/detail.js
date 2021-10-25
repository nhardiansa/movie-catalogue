import TheMovieDBSource from '../../data/themoviedb-source';
import UrlParser from '../../routes/url-parser';
import { createMovieDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="movie" class="movie"></div>
    `;
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const movie = await TheMovieDBSource.MovieDetail(url.id);
      const movieContainer = document.querySelector('#movie');
      movieContainer.innerHTML = createMovieDetailTemplate(movie);
    } catch (err) {
      console.error(err);
    }
  },
};

export default Detail;
