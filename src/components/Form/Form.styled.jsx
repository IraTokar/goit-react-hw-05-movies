import styled from 'styled-components';

export const Input = styled.input`
    margin: 15px 5px 15px 15px;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 5px;
    font-size: 18px;

    &:hover{
        border: 2px solid #e660cb;
    }

`;

export const Button = styled.button`
    border: 1px solid #e660cb;
    border-radius: 5px;
    padding: 5px;
    font-size: 18px;
    background-color: #ebb4e0;
    color: #3e3d3d;

    &:hover{
        border: 2px solid #e660cb;
        background-color: #e660cb;
    }

`;