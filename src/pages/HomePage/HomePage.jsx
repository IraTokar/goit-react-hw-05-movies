import { useEffect, useState } from 'react';
import { fetchTrending } from 'components/TMDBApi';
import TrendingList from 'components/TrendingLIst/TrendingList';
import Loader from 'components/Loader/Loader';




const HomePage = () => {
    const [films, setFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        fetchTrending()
            .then(trendingFilms => {
                setFilms(trendingFilms);
            })
            .catch(error => { console.log(error); })
            .finally(()=>{setIsLoading(false);})
    }, []);
    
    return (
        <main>
            <h1>Trending today</h1>
            <TrendingList films={films} />
           
            {isLoading && <Loader/>}
        </main>
    );
};

export default HomePage;


