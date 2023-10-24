export const API_BASE_URL = 'https://api.themoviedb.org/3';
export const API_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';

export async function getTrendingMovies() {
  fetch(`${API_BASE_URL}/trending/movie/week`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(err => {
      throw new Error(err.message);
    });
}
