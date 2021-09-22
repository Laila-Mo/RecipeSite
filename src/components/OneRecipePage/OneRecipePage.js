import React,{useEffect,useState} from "react";

const OneRecipePage = () => {
    
    const API_KEY="0d03c4642bcc48aab962798cd5c62a8c";
    const id="715594";
    const [steps,setSteps]=useState([]);
    //const [ingredients,setIngredients]=useState([]);
    useEffect(()=>{
      //getIngredients();
      getSteps();
    },[]);
    const getSteps=async()=>{
      const response=await fetch(`https://api.spoonacular.com/recipes/324694/analyzedInstructions?&apiKey=${API_KEY}`);
      const data = await response.json();
      setSteps(data[0].steps);
      console.log(data[0].steps); 
    };
    /*const getIngredients=async()=>{
      const response=await fetch(`https://api.spoonacular.com/recipes/324694/analyzedInstructions?&apiKey=${API_KEY}`);
      const data = await response.json();
      setSteps(data[1].ingredients);
      console.log(data[1].ingredients); 
    };*/
   
    return (
      <div>
        
        {steps.map(step=>(
          <h1> 
          {step.number}
          :{step.step}
          </h1>
          ))}
      </div>
    );
  }

export default OneRecipePage;
