
import {useLocation } from 'react-router-dom';
import { Item, MovieLink } from './TrendingList.styled';



const TrendingList = ({ films }) => {
  const location = useLocation();
   
  return (
    <ul>
      {films.map(film => (
        <Item key={film.id}>
          <MovieLink to= {`/movies/${film.id}`} state={{ from: location }}>
            {film.title}
          </MovieLink>
        </Item>
      ))}
    </ul>
  );
};



export default TrendingList;






