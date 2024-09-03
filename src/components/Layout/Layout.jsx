import Loader  from "components/Loader/Loader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container,Header,Link} from "./Layout.styles";

export const Layout = () => {
    return (
        <Container>
            <Header>
                <nav>
                   <Link to="/">Home</Link>
                   <Link to="/movies">Movies</Link>

                </nav>
            </Header>   

            <Suspense fallback = {<Loader/>}>
                <Outlet />
            </Suspense>   
        </Container>
    );
};

export default Layout;


