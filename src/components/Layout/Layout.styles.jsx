import styled from 'styled-components';
import { NavLink} from "react-router-dom";

export const Container = styled.div`
    padding: 15px 50px;
    margin-left: auto;
    margin-right: auto;
`;

export const Header = styled.header`
    border-bottom: solid 2px #b4b4c6;
    padding-bottom: 15px;
`;

export const Link = styled(NavLink)`
    margin-right: 10px;
    font-size: 25px;
    font-weight: 500;
    color: #474545;
    padding-top: 10px;
    padding-bottom: 10px;

    &.active {
    color: #e660cb;
  }
`;