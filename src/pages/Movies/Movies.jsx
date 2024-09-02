import { useEffect, useState } from 'react';
import { fetchSearchByKeyword } from 'components/TMDBApi';
import Form from 'components/Form/Form';
import TrendingList from 'components/TrendingLIst/TrendingList';
import Loader from 'components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';


const Movies = () => {
    const [searchFilm, setSearchFilm] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [params, setParams] = useSearchParams();
    const movieName = params.get('query') ?? '';

    const updateQueryString = query => {
    const nextParams = query !== '' && { query };
    setParams(nextParams);
  };


    useEffect(() => {
        if (movieName === '') {
            return;
        };

            const searchMovies = ()=> {
        setIsLoading(true);

        fetchSearchByKeyword(movieName)
            .then(movies => { setSearchFilm(movies); })
            .catch(error => { console.log(error); })
            .finally(() => { setIsLoading(false); })
    };
        
        searchMovies();
      
    },[movieName])
  

    return (
        <main>
            
            <Form searchMovies={updateQueryString} />
            {isLoading && <Loader />}
            {searchFilm && <TrendingList films={searchFilm} />}
            
            
        </main>
    );
};

export default Movies;


//   useEffect(() => {
//     const search = async () => {
//       try {
//         setIsLoading(true);
//         const movies = await fetchSearchByKeyword(movieName);
//         setSearchFilms(movies);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     search();
//   }, [movieName]);


