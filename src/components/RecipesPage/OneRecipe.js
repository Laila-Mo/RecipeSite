import React from "react";
import OneRecipePage from "../OneRecipePage/OneRecipePage";
import {
    RecipesCard,
    RecipesImg,
    RecipesH2,
}
from './OneRecipeElements';

const OneRecipe =(props)=>{
  
    return (
                <RecipesCard  to={{ pathname:'/Details',
                 state:{ 
                    id: props.id
                 }
                }} 
                >
                    <RecipesImg src={props.image}/>
                    <RecipesH2>{props.title}</RecipesH2>
                </RecipesCard>
    );
};
export default OneRecipe;