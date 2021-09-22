import React from 'react'
import Recipe1 from '../../images/Recipe1.png';
import Recipe2 from '../../images/Recipe2.png';
import Recipe3 from '../../images/Recipe3.png';
import{
    RecipesContainer,
    RecipesH1,
    RecipesWrapper,
    RecipesCard,
    RecipesImg,
    RecipesH2,
    RecipesButton,
    RecipesButtonLink
} from './RecipesElements'
const Recipes = () => {
    return (
        <RecipesContainer id="recipes">
            <RecipesH1>-Our Newest Recipes-</RecipesH1>
            <RecipesWrapper>
                <RecipesCard to='/recipes'>
                    <RecipesImg src={Recipe1}/>
                    <RecipesH2>Cauliflower, Brown Rice, and Vegetable Fried Rice</RecipesH2>
                </RecipesCard>
                <RecipesCard to='/recipes'>
                    <RecipesImg src={Recipe2}/>
                    <RecipesH2>Homemade Garlic and Basil French Fries</RecipesH2> 
                </RecipesCard>
                <RecipesCard to='/recipes'>
                    <RecipesImg src={Recipe3}/>
                    <RecipesH2>Berry Banana Breakfast Smoothie</RecipesH2> 
                </RecipesCard>
            </RecipesWrapper>
            <RecipesButton>
          <RecipesButtonLink to='/recipes'>See More </RecipesButtonLink>
        </RecipesButton>
        </RecipesContainer >
    )
}

export default Recipes;

