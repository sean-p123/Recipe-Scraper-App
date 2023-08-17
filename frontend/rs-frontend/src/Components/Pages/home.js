import React from "react";
//import { response } from "../../../../../backend/rs-backend/app";

export class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ingredients: [], // Initialize an empty array to store ingredients
      instructions: [], // Initialize an empty array to store instructions
    }
  }
  handleButtonClick = () => {
    const url = document.getElementById("recipeURL").value;
    const iframe = document.getElementById("recipeFrame");

    // Sending the URL to the backend using fetch API
    fetch("http://localhost:9000/getRecipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: url }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        // Assuming the backend returns the recipe data in "data.recipe" property
        iframe.src = data.recipe;

        /*this.setState(
          { ingredients: data.recipeIngredients, instructions: data.recipeInstruction },
          () => {
            console.log("Ingredients state:", this.state.ingredients);
            console.log("Instructions state:", this.state.instructions);
          }
        );*/

        // iframe.src = url;
      })
      .catch((error) => {
        console.error("Error loading recipe:", error);
      });
    console.log(url.recipe);
    iframe.src = url;


    console.log("Ingredients state:", this.state.ingredients);
    console.log("Instructions state:", this.state.instructions);

    /* this.setState({ingredients: url.recipeIngredients});
     this.setState({instructions: url.recipeInstruction});
     */



    fetch("http://localhost:9000/getRecipe/api/scrapedRecipeIngredients")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState(
          {
            ingredients: data.recipeIngredients,
          },
          () => {
            console.log("Ingredients state:", this.state.ingredients);
          }
        );
      })


      fetch("http://localhost:9000/getRecipe/api/scrapedRecipeInstructions")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState(
          {
            instructions: data.recipeInstruction,
          },
          () => {
            console.log("Instructions state:", this.state.instructions);
          }
        );
      })

    /* const instructionResponse =  fetch("http://localhost:9000/getRecipe/api/scrapedRecipeIngredients");
   const instructionList =  instructionResponse.json();
   console.log(instructionList);
*/

  }

  render() {
    return (
      <div>
        <h1>Recipe Keeper</h1>
        <div>
          <label>Enter URL for recipe: </label>
          <input type="text" id="recipeURL"></input>
          <button onClick={this.handleButtonClick}>Load Recipe</button>
        </div>
        <iframe id="recipeFrame" width="680" height="480" allowFullScreen></iframe>
        <div>
          
          <div className="recipe-container">
            <h1>Ingredients:</h1>
            <ul>
              {this.state.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>

            <h1>Instructions:</h1>
            <ol>
              {this.state.instructions.map((instruction, index) => (
                <li key={index}>{instruction.text}</li>
              ))}
            </ol>
           
          </div>
          
        </div>
      </div>


    );
  }
}
export default Home;