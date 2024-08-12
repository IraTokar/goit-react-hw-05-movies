import {  NavLink, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Movies from "./pages/Movies/Movies";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Cast from "./pages/Cast/Cast";
import Reviews from "./pages/Reviews/Reviews";
import Layout from "./Layout/Layout";

export const App = () => {
  return (

    <div>

      <header>
        <nav>
          <ul>
            <li>
                <NavLink to="/">HomePage</NavLink>
            </li>
            <li>
                <NavLink to="/movies">Movies</NavLink>
            </li>
            
          </ul>
        </nav>
      </header>
    
      <Routes>
      <Route path="/" element={<Layout />}>
         <Route index element={<HomePage />} />

        <Route path="/movies" element={<Movies />} />

        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>
        


      </Route>
        
      </Routes>
      </div>
   
  );
};


