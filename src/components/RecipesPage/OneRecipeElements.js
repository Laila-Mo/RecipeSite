import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const RecipesCard=styled(Link)`
    height:340px;
    width:300px;
    margin:auto;
    text-decoration: none;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items:center;
    border-radius:20px;
    max-height: 340px;
    padding: 50 px;
    box-shadow:0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor:pointer;
    }
`;

export const RecipesImg= styled.img`
height: 220px;
width: 300px;
margin-bottom: 10px;
`;

export const RecipesH2=styled.h2`
color: #213848;
font-size: 1.5rem;
margin-bottom: 15px;
text-align:center;
margin-left:20px;
margin-right:20px;
font-weight:100;
`;

export const RecipesP=styled.p`
color: #213848;
font-size: 1rem;
text-align: center;
`;

