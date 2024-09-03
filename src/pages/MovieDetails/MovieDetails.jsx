import { useEffect, useRef, useState } from 'react';
import { fetchMovieDetails } from 'components/TMDBApi';
import Loader from 'components/Loader/Loader';
import { Outlet,Link, useParams, useLocation } from 'react-router-dom';
import { Button, Container, List, AdditionalList, AdditionalLink} from './MovieDetails.styled';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [infoMovie, setInfoMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();
    const backLinkRef = useRef(location);

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
            <Link to={backLinkRef.state?.from ?? '/'}>
                <Button>Go back</Button>
            </Link>
            {isLoading && <Loader />}
        
            {infoMovie && (
                <Container>
                    <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title} width="250px" />
                    <div>
                        <h1>{title}({release_date.slice(0,4)})</h1>
                        <p>User score: {popularity}%</p>
                        <h2>Overview</h2>
                        <p>{overview}</p>
                        <h2>Genres</h2>
                        <List>
                            {genres.map(genre => (
                                <li key={genre.id}>{genre.name}</li>
                            ))}
                        </List>
                    </div>
                </Container>
            )}

            <hr />
            <div>
                <h2>Additional information</h2>
                <AdditionalList>
                    <li>
                        <AdditionalLink to='cast'>Cast</AdditionalLink>
                    </li>
                    <li>
                        <AdditionalLink to='reviews'>Reviews</AdditionalLink>
                    </li>
                </AdditionalList>
                <hr />
                <Outlet/>
            </div>
        </>
    )
};

export default MovieDetails;