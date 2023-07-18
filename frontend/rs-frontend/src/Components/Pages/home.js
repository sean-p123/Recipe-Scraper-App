import React from "react";

export class Home extends React.Component{

    handleButtonClick = ()=>{
        const url = document.getElementById("recipeURL").value;
        const iframe = document.getElementById("recipeFrame");

        iframe.src = url
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