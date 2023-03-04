import Link from "next/link";

function Movie({ movie }) {
  const imagePath = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="my-5 w-m mx-auto border-1 md:w-sm">
      <Link href={`/${movie.id}`}>
        <img src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
      </Link>
      <div className="text-center">
        <h1 className="text-xl">{movie.title}</h1>
        <p>{movie.release_date}</p>
        <p>{movie.popularity}</p>
      </div>
    </div>
  );
}

export default Movie;
