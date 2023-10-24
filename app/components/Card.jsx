import { API_IMAGE_BASE_URL } from '@/services/api';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';

function Card({ movie }) {
  return (
    <div className="p-2 h-[15.5rem] min-w-[12rem] group cursor-pointer overflow-hidden">
      <div className="group overflow-hidden rounded-md">
        <Image
          src={API_IMAGE_BASE_URL + movie?.poster_path}
          alt={movie.title ? movie.title : movie.name}
          width={200}
          height={200}
          className="h-[14rem] w-[12rem] hover:h-[15rem] object-cover transition-all duration-300  hover:brightness-75 dark:brightness-75"
        />
      </div>
      <div className="bg-gray-700/80 px-4 text-white py-2 opacity-0 group-hover:translate-y-[-4rem] group-hover:opacity-100 group-hover:backdrop-blur-sm group-hover:backdrop-brightness-150 transition-all duration-300 rounded-md">
        <div className="flex justify-between text-sm mb-1">
          <p>
            Year:{' '}
            {movie.release_date
              ? movie?.release_date.split('-')[0]
              : movie.first_air_date.split('-')[0]}
          </p>
          <p className="flex items-center gap-1">
            {movie?.vote_average.toFixed(1)}{' '}
            <AiFillStar className="scale-110 text-blue-600" />
          </p>
        </div>
        <p>
          {movie.title && movie?.title.length < 16
            ? movie?.title
            : movie.title
            ? movie?.title.slice(0, 16) + ' ...'
            : movie?.name.length < 16
            ? movie.name
            : movie.name.slice(0, 16) + ' ...'}
        </p>
      </div>
    </div>
  );
}

export default Card;
