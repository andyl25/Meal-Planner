import React, { useState, useEffect} from 'react';
import './Card.css'
//import getTitle from '../util/util.js'


const Card = (meal) =>{
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [recipeInfo, setRecipeInfo] = useState(null);
    const [pic, setPic] = useState(null);
    const [recipeURL, setRecipeURL] = useState(null);
    const [recipeCals, setRecipeCals] = useState(null);
    const[ingredientList, setIngredients] = useState([]);
    const[recipeYield, setYield] = useState(null);
    var mealType = meal.meal;
    var cals = Math.round(meal.calories/3);
    useEffect(() => {
        
        var url = (`https://api.edamam.com/api/recipes/v2?type=public&q=${mealType}&app_id=3847eb33&app_key=22baeebe4abfb12d66370d02a9e23939&calories=${cals-50}-${cals+50}&random=true`);

        fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setRecipeInfo(result.hits[0].recipe.label);
              setPic(result.hits[0].recipe.image);
              setRecipeURL(result.hits[0].recipe.url);
              setIngredients(result.hits[0].recipe.ingredientLines);
              setRecipeCals(result.hits[0].recipe.calories);
              setYield(result.hits[0].recipe.yield);
              console.log(recipeYield);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])

  var calAdjusted = Math.round(recipeCals/recipeYield);
      
      if (error) {
        return <div>API limit reached. Wait a couple seconds and try again</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } 
      else
      {
        const ingredientsFormatted = [];
        for(const ingredient of ingredientList)
        {
            ingredientsFormatted.push(<p>• {ingredient}</p>);
        }
        return (
        <> 
            <p className="meal-title">{mealType}</p>
            <a href={recipeURL} target="_blank">
            <div className = "card">
                <div>
                    <img src={pic} className = "image"></img>
                    <p className = "title-card">{recipeInfo}</p>
                    <p className = "title-card">{calAdjusted} Calories ({recipeYield} servings)</p>
                    
                    <div className="ingredient-list">{ingredientsFormatted}</div>
                    
                </div>
               
            </div>
            
            </a>
            
        </>
      )
      }
}



export default Card
