import React,{useEffect,useState} from "react";
import OneRecipe from "./OneRecipe";
import {
  PageContainer,
  RecipesWrapper,
  PageHeader,
  SearchForm,
  SearchInput,
  SearchButton,
  SearchContainer,

} from"./RecipesPageElements";

const RecipesPage = () => {
    const API_KEY="0d03c4642bcc48aab962798cd5c62a8c";
    const [recipes,setRecipes]=useState([]);
    const [search,setSearch]=useState('');
    const [query,setQuery]= useState('');
  
    useEffect(()=>{
      getRecipes();
    },[query]);
    const getRecipes=async()=>{
      const response=await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${API_KEY}`);
      const data = await response.json();
      setRecipes(data.results);
      console.log(data.results); 
    };
    const updateSearch= e =>{
      setSearch(e.target.value);
      console.log(search);
    }
    const getSearch = e =>{
      e.preventDefault();
      setQuery(search);
      setSearch('');
    }
    return (
      <PageContainer>
      <SearchContainer>
      <PageHeader>Find a Recipe</PageHeader>
        <SearchForm onSubmit={getSearch} className="search-form">
          <SearchInput  type="text" placeholder="Search..."value={search} onChange={updateSearch}/>
          <SearchButton  type="submit"></SearchButton>
        </SearchForm>
        </SearchContainer>
        <RecipesWrapper>
        {recipes.map(recipe=>(
          <OneRecipe 
          key={recipe.id}
          id={recipe.id}
          title={recipe.title}
          image={recipe.image}
          />
        ))}
        </RecipesWrapper>
      </PageContainer>
    );
  }
export default RecipesPage;