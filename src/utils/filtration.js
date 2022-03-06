/* eslint-disable prefer-destructuring */
export default function filter(values, movies) {
  if (!values || !movies) {
    return [];
  }

  if (values.movies === '') {
    return movies;
  }

  return movies.filter((movie) => {
    const nameRu = movie.nameRU.toLowerCase();
    const duration = movie.duration;

    if (nameRu.includes(values.movie.toLowerCase())) {
      if (values.checkbox) {
        if (duration <= 40) {
          return true;
        }
        return false;
      }
      return true;
    }
    return false;
  });
}
