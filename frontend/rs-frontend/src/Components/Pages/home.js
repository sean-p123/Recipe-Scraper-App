import React from "react";

export class Home extends React.Component{

    handleButtonClick = ()=>{
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
          // Assuming the backend returns the recipe data in "data.recipe" property
          iframe.src = data.recipe;

        // iframe.src = url;
        })
        .catch((error) => {
          console.error("Error loading recipe:", error);
        });
        console.log(url.recipe);
        iframe.src = url;
    }

    render(){
        return(
            <div>
                <h1>Recipe Keeper</h1>
                <div>
                <label>Enter URL for recipe: </label>
                <input type="text" id="recipeURL"></input>
                <button onClick={this.handleButtonClick}>Load Recipe</button>
                </div>
                <iframe id="recipeFrame"  width="680" height="480" allowFullScreen></iframe>
                <div>
                <object data="https:/youtube.com" width="600" height="400">
                    
                 Error: Embedded data could not be displayed.
    </object>
              </div>
            </div>
           
            
            );
    }
}
export default Home;