import TheMovieDBSource from '../../data/themoviedb-source';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `
      <h2>Detail Page</h2>
    `;
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const movies = await TheMovieDBSource.Detail(url.id);
      console.log({ movies });
    } catch (err) {
      console.log({ err });
    }
  },
};

export default Detail;
