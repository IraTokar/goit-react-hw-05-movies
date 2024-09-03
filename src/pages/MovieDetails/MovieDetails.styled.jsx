import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled.button`
    border: 1px solid #e660cb;
    border-radius: 5px;
    padding: 5px;
    font-size: 18px;
    background-color: #ebb4e0;
    color: #3e3d3d;
    margin: 15px;

    &:hover{
        border: 2px solid #e660cb;
        background-color: #e660cb;
    }
`;

export const Container = styled.div`
    display: flex;
    padding: 20px 0 20px 0;
    gap: 24px;
`;

export const List = styled.ul`
    display: flex;
    gap: 12px;
    padding: 0 0 20px 0;
`;

export const AdditionalList = styled.ul`
    display: flex;
    gap: 10px;
`;

export const AdditionalLink = styled(Link)`
    border: 1px solid #e660cb;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 18px;
    background-color: #ebb4e0;
    color: #3e3d3d;
    margin-right: 10px;
    margin-bottom: 15px;


    &:hover{
        border: 2px solid #e660cb;
        background-color: #e660cb;
    }
`;

