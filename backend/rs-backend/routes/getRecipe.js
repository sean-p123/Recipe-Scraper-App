var express = require("express");
var router = express.Router();
var cheerio = require("cheerio");

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

  let recipeURL =""
  router.post("/", function (req, res, next) {
    // Extracting the URL data from the request body
    const { url } = req.body;
  
    // Here you can perform web scraping or other operations based on the provided URL
    // For this example, we'll just return the URL as is
   recipeURL = url;
  
    // Sending the recipe URL back to the frontend
    res.json({ recipe: recipeURL });

    console.log("nice " +recipeURL)
    //now you have the url, you must scrape the website url using cheerio
    //to get the information you want


    
  //  res.json({ message: "Recipe data received and processed successfully" });

   // res.send(recipeURL);
  });

  router.get("/api/scrapedRecipe", function(req, res, next) {
    res.json({recipe: recipeData});
});
module.exports = router;