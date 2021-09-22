import styled from 'styled-components';
import {Link} from 'react-router-dom';
export const RecipesContainer=styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    background: white;
`;
export const RecipesWrapper=styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items:center;
    grid-gap: 16px;
    padding: 0 50 px;
`;
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
export const RecipesH1=styled.h1`
text-align:center;
font-size: 2rem;
font-weight: 100;
color: #213848;
margin-bottom: 80px;

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
export const RecipesButton = styled.nav`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const  RecipesButtonLink = styled(Link)`
  vertical-align:center;
  border-radius: 4px;
  background: #FEA600;
  padding: 10px 22px;
  color: white;
  outline: none;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-size: 1.5rem;
  margin-top: 50px;
  &:hover {
    transition: all 0.2s ease-in-out;
   background: white;
   color:#FEA600;
  
  }
`;