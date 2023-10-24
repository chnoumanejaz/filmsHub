import { API_BASE_URL } from '@/services/api';
import Card from './Card';

async function DisplaySection({ label }) {
  const trendingMovies = await fetch(
    `${API_BASE_URL}/trending/movie/week?api_key=${process.env.API_KEY}`
  )
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(err => {
      throw new Error(err.message);
    });

  const trendingSeries = await fetch(
    `${API_BASE_URL}/trending/tv/week?api_key=${process.env.API_KEY}`
  )
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(err => {
      throw new Error(err.message);
    });

  return (
    <div className="px-12 py-4 mt-4 flex flex-col gap-4 dark:text-blue-50">
      <h2 className="text-xl tracking-wide">{label}</h2>
      <div className="flex overflow-x-scroll pb-2">
        {label.includes('Trending Movies')
          ? trendingMovies.results?.map(movie => (
              <Card movie={movie} key={movie.id} />
            ))
          : trendingSeries.results?.map(movie => (
              <Card movie={movie} key={movie.id} />
            ))}
      </div>
    </div>
  );
}

export default DisplaySection;
