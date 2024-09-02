import { useEffect, useState } from 'react';
import { fetchMovieDetails } from 'components/TMDBApi';
import Loader from 'components/Loader/Loader';
import { Outlet, Link, useParams, useLocation} from 'react-router-dom';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [infoMovie, setInfoMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        
        const fetchFilmInfo = () => {
            setIsLoading(true);
             
            fetchMovieDetails(movieId)
                .then(details => { setInfoMovie(details); })
                .catch(error => { console.log(error); })
                .finally(() => { setIsLoading(false); })
        };

        fetchFilmInfo();
    }, [movieId]);

    if (!infoMovie) {
        return;
    };

    const { title, release_date,  overview, genres, poster_path, original_title } = infoMovie;
    
    const popularity = Math.round(infoMovie.vote_average * 10);

    return (
        <>
            <Link to={location.state?.from ?? '/'}>
                <button>Go back</button>
            </Link>
            {isLoading && <Loader />}
        
            {infoMovie && (
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title} width="250px"/>
                    <h1>{title}({release_date.slice(0,4)})</h1>
                    <p>User score: {popularity}%</p>
                    <h2>Overview</h2>
                    <p>{overview}</p>
                    <h2>Genres</h2>
                    <ul>
                        {genres.map(genre => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                </div>
            )}

            <hr />
            <div>
                <h3>Additional information</h3>
                <ul>
                    <li>
                        <Link to='cast'>Cast</Link>
                    </li>
                    <li>
                        <Link to='reviews'>Reviews</Link>
                    </li>
                </ul>
                <hr />
                <Outlet/>
            </div>
        </>
    )
};

export default MovieDetails;