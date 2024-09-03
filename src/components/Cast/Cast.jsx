import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchActors } from "components/TMDBApi";
import Loader from "components/Loader/Loader";
import { List, Text } from "./Cast.styled";

const Cast = () => {
    const [actorsInfo, setActorsInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { movieId } = useParams();

    useEffect(() => {
        const fetchActorsInfo = () => {
            setIsLoading(true);

            fetchActors(movieId)
                .then(actors => { setActorsInfo(actors); })
                .catch(error => { console.log(error); })
                .finally(() => { setIsLoading(false) })
        }

        fetchActorsInfo();
    }, [movieId]);


    return (
        <>
            {isLoading && <Loader />}
            <h2>Movie cast</h2>
            <List>
                {actorsInfo.map(({ id, name, original_name, profile_path, character }) => (
                    <li key={id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={original_name} width="200px"/>
                        <Text>{name}</Text>
                        <Text>Character: {character}</Text>
                    </li>
                ))
                    
                }
            </List>
        </>
    )
    
};

export default Cast;



