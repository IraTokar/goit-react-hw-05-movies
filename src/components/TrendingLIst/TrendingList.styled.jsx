import styled from 'styled-components';
import { Link} from "react-router-dom";

export const Item = styled.li`
    margin-bottom: 10px;
`;

export const MovieLink = styled(Link)`
    margin-bottom: 10px;
    color: black;

     &:hover {
    color: #e660cb;
    }
`;