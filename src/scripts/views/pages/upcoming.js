import TheMovieDBSource from '../../data/themoviedb-source';

const Upcoming = {
  async render() {
    return `
      <h2>Upcoming Page</h2>
    `;
  },

  async afterRender() {
    const movies = await TheMovieDBSource.upcomingMovies();
    console.log({ movies });
  },

};

export default Upcoming;
