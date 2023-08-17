var express = require("express");
var router = express.Router();
var cheerio = require("cheerio");
var axios = require("axios");
/*router.get("/", function(req, res, next) {
    res.send("API Working properly");
});

router.post("/load-recipe", function (req, res, next) {
    // Extracting the URL data from the request body
    const { url } = req.body;
  
    // Here you can perform web scraping or other operations based on the provided URL
    // For this example, we'll just return the URL as is
    const recipeURL = url;
  
    // Sending the recipe URL back to the frontend
    res.json({ recipe: recipeURL });
  });
  */

let recipeURL = "";
let recipeIngredients = "";
let recipeInstruction = "";
let thumbnailImageUrl = ""
let scriptContent;
router.post("/", async function (req, res, next) {
  // Extracting the URL data from the request body
  const { url } = req.body;

  // Here you can perform web scraping or other operations based on the provided URL
  // For this example, we'll just return the URL as is
  recipeURL = url;

  // Sending the recipe URL back to the frontend
  res.json({ recipe: recipeURL });
  console.log("nice " + recipeURL)
  //now you have the url, you must scrape the website url using cheerio
  //to get the information you want

  const response = await axios.get(url);
  const htmlContent = response.data;

  //now use cheerio to parst the html data
  const $ = cheerio.load(htmlContent);

  const ogImageTag = $('meta[property="og:image"]');
  const thumbnailImageUrl = ogImageTag.attr('content');
  //using this link https://tasty.co/recipe/french-onion-smash-burger-tacos
  //possibly try to stop this loop after the first iteration
  $('script').each((index, element) => {
    const script = $(element);

    



    if (script.attr('type') === 'application/ld+json') {
      //const scriptContent = script.html();
      scriptContent = script.html();
      //parse script content to json
      const scriptData = JSON.parse(scriptContent);
     /* console.log("*** Start of script data ***");
      console.log(scriptData);
      console.log("*** End of script data ***");
*/
    /*  recipeIngredients = scriptData[0].recipeIngredient;
      recipeInstruction = scriptData[0].recipeInstructions;
      */
      if (scriptData.recipeIngredient && scriptData.recipeInstructions) {
      recipeIngredients = scriptData.recipeIngredient;
      recipeInstruction = scriptData.recipeInstructions;

      console.log("Recipe Ingredients:");
      recipeIngredients.forEach((ingredient, index) => {
        console.log(`${index + 1}. ${ingredient}`);
      });

      console.log("\nRecipe Instructions:");
      recipeInstruction.forEach((instruction, index) => {
        console.log(`${index + 1}. ${instruction.text}`);
      });
    }
      //works for food network
      /*
      if(scriptData.recipeIngredient !== undefined){
        //access recipe ingredients
        recipeIngredients = scriptData.recipeIngredient;

        console.log(recipeIngredients);

        recipeIngredients.forEach((ingredient, index) => {
          console.log(`Ingredient ${index + 1}: ${ingredient}`);
        });
      }
      else{
        console.log("undefined");
      }*/

      //    console.log($)
    }
  })

  //  console.log(response.data);

   /* res.json({ message: "Recipe data received and processed successfully",
  thumbnailImg: thumbnailImageUrl, });
*/
  // res.send(recipeURL);
  console.log("Thumbnail Image URL:", thumbnailImageUrl);
});

router.get("/api/scrapedRecipeIngredients", function (req, res, next) {
  const responseData = {
    recipeIngredients: recipeIngredients
  };
  res.json(responseData);
});

router.get("/api/scrapedRecipeInstructions", function(req,res,next){
  const responseData = {
    recipeInstruction: recipeInstruction
  };
  res.json(responseData);
})
module.exports = router;