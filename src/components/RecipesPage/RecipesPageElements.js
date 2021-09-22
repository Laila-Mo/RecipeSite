import styled from 'styled-components';
import ImgBg from '../../images/Recipe.jpg';
export const PageContainer=styled.div`
    margin-bottom:100px;
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

export const SearchContainer=styled.div`
    height:400px;
    width: 100%;
    margin-bottom:100px;
    display: flex;
    justify-content: center;
    align-items:center;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)),
    url(${ImgBg});
    background-position: center;
  background-size: 100%;
`;

export const PageHeader=styled.h1`
text-align:center;
font-size: 4rem;
font-weight: 300;
color: white;
margin-bottom: 80px;
font-family: 'Apple Chancery ', cursive;
`;
export const SearchForm = styled.form`
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 300px;
    height: 100px;
    
  `;
export const SearchButton=styled.button`
      position: absolute;
      margin: auto;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 80px;
      height: 80px;
      background: orange;
      border-radius: 50%;
      transition: all 1s;
      z-index: 4;
      box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.4);
      &:hover {
        cursor: pointer;
      }
      &::before {
        content: "";
        position: absolute;
        margin: auto;
        top: 22px;
        right: 0;
        bottom: 0;
        left: 22px;
        width: 12px;
        height: 2px;
        background: white;
        transform: rotate(45deg);
        transition: all .5s;
      }
      &::after {
        content: "";
        position: absolute;
        margin: auto;
        top: -5px;
        right: 0;
        bottom: 0;
        left: -5px;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: 2px solid white;
        transition: all .5s;
      }
      
`;
export const SearchInput=styled.input`
      position: absolute;
      margin: auto;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 50px;
      outline: none;
      border: none;
      background: orange;
      color: white;
      text-shadow: 0 0 10px orange;
      padding: 0 80px 0 20px;
      border-radius: 30px;
      box-shadow: 0 0 25px 0 orange,
                  0 20px 25px 0 rgba(0, 0, 0, 0.2);
      transition: all 1s;
      opacity: 0;
      z-index: 5;
      font-weight: bolder;
      letter-spacing: 0.1em;
      &:hover {
        cursor: pointer;
      }
      &:focus {
        width: 300px;
        opacity: 1;
        cursor: text;
      }
      &:focus ~ ${SearchButton} {
        right: -250px;
        background: #151515;
        z-index: 6;
        &::before {
          top: 0;
          left: 0;
          width: 25px;
        }
        &::after {
          top: 0;
          left: 0;
          width: 25px;
          height: 2px;
          border: none;
          background: white;
          border-radius: 0%;
          transform: rotate(-45deg);
        }
      }
      &::placeholder {
        color: white;
        opacity: 0.5;
        font-weight: bolder;
      }
`;
