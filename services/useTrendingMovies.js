import { useQuery } from '@tanstack/react-query';
import { getTrendingMovies } from './api';

export default function useTrendingMovies() {
  const {
    isLoading,
    data: trendingMovies,
    error,
  } = useQuery({
    queryKey: ['trendingMovies'],
    queryFn: getTrendingMovies,
  });

  return { isLoading, trendingMovies, error };
}
