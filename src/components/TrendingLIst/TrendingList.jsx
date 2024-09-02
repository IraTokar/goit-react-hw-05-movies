
import { Link, useLocation } from 'react-router-dom';


const TrendingList = ({ films }) => {
  const location = useLocation();
   
  return (
    <ul>
      {films.map(film => (
        <li key={film.id}>
          <Link to= {`/movies/${film.id}`} state={{ from: location }}>
            {film.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};



export default TrendingList;






