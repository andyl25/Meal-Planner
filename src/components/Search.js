import React, { useState, useEffect} from 'react';
import './Search.css'


const Search = () =>{
        return (
        <> 
            <form action="/Meal-Planner/" method="get">
                <input 
                    type='text' 
                    placeholder="Enter your daily calorie goal..." 
                    className="calorie-bar"
                    name="calories"></input>
                <button type="submit" className="button">Find Recipes</button>
            </form>
        </>
      )
}



export default Search
