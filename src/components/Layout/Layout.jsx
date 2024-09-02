import Loader  from "components/Loader/Loader";
import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <div>
            <header>
                <nav>
                   <NavLink to="/">Home</NavLink>
                   <NavLink to="/movies">Movies</NavLink>

                </nav>
            </header>   
            
            <Suspense fallback = {<Loader/>}>
                <Outlet />
            </Suspense>   
        </div>
    );
};

export default Layout;


