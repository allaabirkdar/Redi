let key = "d8634019d71d442f8f51f0cfbb930324";
// async function getRecipes() {
//     let url = "https://api.spoonacular.com/recipes/complexSearch&diet=ketogenic"
//     url += "?apiKey=5c3d8c18c38d4c0e84482a5649a80d38"; // put your api key here
//     // for now, let's just use chicken, later you'll get the search from an input field
//     url += "&query=chicken";
//     url += "&diet=ketogenice";
//     // this is the main query to get a list of recipes
//     let response = await fetch(url);
//     let result = await response.json();
//     // use a loop to go through the list of recipes
//     // print the id of each recipe to the console
//     // once you've done that, use the id to make a new fetch() request to this url
//     // https://api.spoonacular.com/recipes/" + recipeId + "/information?apiKey=[your api key]
//     // console log the result from this second fetch()
//     console.log(result);
// }
// getRecipes();
// async function searchByIngredient(ingredient) {
//     // base url of the api
//     let url = "https://api.spoonacular.com/recipes/findByIngredients";
//     // let's append the query parameter for the apiKey to the url
//     url += "?apiKey=5c3d8c18c38d4c0e84482a5649a80d38";
//     // let's append the query parameter for the ingredient
//     url += "&ingredients=" + ingredient;
//     url += "&diet=Ketogenic";
//     let response = await fetch(url);
//     let result = await response.json();
//     console.log(result);
//     // let recipeId = result[0].id;
//     // console.log(recipeId);
//     // let responseInfo = await fetch("https://api.spoonacular.com/recipes/" + recipeId + "/information?apiKey=5c3d8c18c38d4c0e84482a5649a80d38");
//     // let resultInfo = await responseInfo.json();
//     // console.log(resultInfo);
// }
// searchByIngredient("potato");
// //fetch("https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2");
//https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=d8aedf6121d1441bb0eaf620df4d78da
//https://spoonacular.com/food-api/docs#Search-Recipes-by-Ingredients
/*async function fetchapifood() {
    let response = await fetch("https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=d8aedf6121d1441bb0eaf620df4d78da");
    let result = await response.json();
    console.log(result);
  }
  fetchapifood();
  async function fetchapiRecipes() {
    let response = await fetch("https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples&apiKey=d8aedf6121d1441bb0eaf620df4d78da");
    let result = await response.json();
    console.log(result);
  }
  fetchapiRecipes();
*/
async function getRecipes() {
    /**
     * This url lets us search for recipes based on a keyword that we specify
     * in the &query parameter
     *
     * Right now we are searching for recipes with "chicken", later we'll get the keyword from an input
    */
    let url = "https://api.spoonacular.com/recipes/complexSearch";
    url += "?apiKey=" + key; // put your api key here
    // for now, let's just use chicken, later you'll get the search from an input field
    url += "&query=chicken";
    url += "&diet=ketogenic";
    // this is the main query to get a list of recipes
    //let response = await fetch(url);
    /* result contains the full result from the api. The recipes are inside
        the property results. So, to get to them we have to use result.results
    */
    // let result = await response.json();
    let result = {
        "offset": 0,
        "number": 2,
        "results": [
            {
                "id": 716429,
                "calories": 584,
                "carbs": "84g",
                "fat": "20g",
                "image": "https://spoonacular.com/recipeImages/716429-312x231.jpg",
                "imageType": "jpg",
                "protein": "19g",
                "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs"
            },
            {
                "id": 715538,
                "calories": 521,
                "carbs": "69g",
                "fat": "10g",
                "image": "https://spoonacular.com/recipeImages/715538-312x231.jpg",
                "imageType": "jpg",
                "protein": "35g",
                "title": "What to make for dinner tonight?? Bruschetta Style Pork & Pasta"
            }
        ],
        "totalResults": 86
    }
    // use a loop to go through the list of recipes
    // print the id of each recipe to the console
    // once you've done that, use the id to make a new fetch() request to this url
    // https://api.spoonacular.com/recipes/" + recipeId + "/information?apiKey=[your api key]
    // console log the result from this second fetch()
    // console.log("Results", result.results);
    // here we loop through the list of recipes, they are inside result.results
    for (let i = 0; i < result.results.length; i++) {
        // console.log("Results[i]", result.results[i]);
        // console.log("recipe id", result.results[i].id);
        // console.log("recipe title", result.results[i].title);
        // console.log("recipe image", result.results[i].image);
        // console.log("Ingredients calories", result.nutrients[i].calories);


        let frameTitle = document.createElement("div");
        document.body.appendChild(frameTitle);
        frameTitle.classList.add("recipe");

        let recipeTitle = document.createElement("h2");
        recipeTitle.textContent = (result.results[i].title)
        frameTitle.appendChild(recipeTitle);


        let subtitleElement = document.createElement("div");
        subtitleElement.textContent = ("total " + result.results[i].calories)
        frameTitle.appendChild(subtitleElement);








        /**
         *  We call the function fetchapiRecipes() passing to it the id of a recipe
         *
         * Inside that function we fetch the specific information for a recipe
         *
         * Recipe will now contain all the data of a recipe, including ingredients
         */
        let Recipe = await fetchapiRecipes(result.results[i].id);
        // console.log("Recipe", Recipe);
        // console.log("Recipe extendedIngredients", Recipe.extendedIngredients);
        // We need to get extra info for each ingredient
        // To do that, we need to loop through the array of ingredients (Recipe.extendedIngredients)
        // Inside the loop, start by printing the id of each ingredient
        // Once you have the id, pass this id to the function ingredients()
        /*let ingredient = await ingredients();*/
        // after you do that, use console.log() to print the whole ingredient and have a look at the data inside
        // Recipe.extendedIngredients.forEach(async function printingIngredient (ingredient) {
        //  console.log("this is my ", ingredient);

        //  let infoIngredient = await ingredients(ingredient.id)
        //  console.log(infoIngredient);
        // })



        console.log("--------------------------------");
    }
}
console.log("Hello Allaa how are you?");


getRecipes() // Hello again;
async function fetchapiRecipes(recipeId) {
    // let response = await fetch("https://api.spoonacular.com/recipes/" + recipeId + "/information?apiKey="+ key);
    //let result = await response.json();
    let result = {
        "id": 716429,
        "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
        "image": "https://spoonacular.com/recipeImages/716429-556x370.jpg",
        "imageType": "jpg",
        "servings": 2,
        "readyInMinutes": 45,
        "license": "CC BY-SA 3.0",
        "sourceName": "Full Belly Sisters",
        "sourceUrl": "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
        "spoonacularSourceUrl": "https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429",
        "aggregateLikes": 209,
        "healthScore": 19.0,
        "spoonacularScore": 83.0,
        "pricePerServing": 163.15,
        "analyzedInstructions": [],
        "cheap": false,
        "creditsText": "Full Belly Sisters",
        "cuisines": [],
        "dairyFree": false,
        "diets": [],
        "gaps": "no",
        "glutenFree": false,
        "instructions": "",
        "ketogenic": false,
        "lowFodmap": false,
        "occasions": [],
        "sustainable": false,
        "vegan": false,
        "vegetarian": false,
        "veryHealthy": false,
        "veryPopular": false,
        "whole30": false,
        "weightWatcherSmartPoints": 17,
        "dishTypes": [
            "lunch",
            "main course",
            "main dish",
            "dinner"
        ],
        "extendedIngredients": [
            {
                "aisle": "Milk, Eggs, Other Dairy",
                "amount": 1.0,
                "consitency": "solid",
                "id": 1001,
                "image": "butter-sliced.jpg",
                "measures": {
                    "metric": {
                        "amount": 1.0,
                        "unitLong": "Tbsp",
                        "unitShort": "Tbsp"
                    },
                    "us": {
                        "amount": 1.0,
                        "unitLong": "Tbsp",
                        "unitShort": "Tbsp"
                    }
                },
                "meta": [],
                "name": "butter",
                "original": "1 tbsp butter",
                "originalName": "butter",
                "unit": "tbsp"
            },
            {
                "aisle": "Produce",
                "amount": 2.0,
                "consitency": "solid",
                "id": 10011135,
                "image": "cauliflower.jpg",
                "measures": {
                    "metric": {
                        "amount": 473.176,
                        "unitLong": "milliliters",
                        "unitShort": "ml"
                    },
                    "us": {
                        "amount": 2.0,
                        "unitLong": "cups",
                        "unitShort": "cups"
                    }
                },
                "meta": [
                    "frozen",
                    "thawed",
                    "cut into bite-sized pieces"
                ],
                "name": "cauliflower florets",
                "original": "about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces",
                "originalName": "about frozen cauliflower florets, thawed, cut into bite-sized pieces",
                "unit": "cups"
            },
            {
                "aisle": "Cheese",
                "amount": 2.0,
                "consitency": "solid",
                "id": 1041009,
                "image": "cheddar-cheese.png",
                "measures": {
                    "metric": {
                        "amount": 2.0,
                        "unitLong": "Tbsps",
                        "unitShort": "Tbsps"
                    },
                    "us": {
                        "amount": 2.0,
                        "unitLong": "Tbsps",
                        "unitShort": "Tbsps"
                    }
                },
                "meta": [
                    "grated",
                    "(I used romano)"
                ],
                "name": "cheese",
                "original": "2 tbsp grated cheese (I used romano)",
                "originalName": "grated cheese (I used romano)",
                "unit": "tbsp"
            },
            {
                "aisle": "Oil, Vinegar, Salad Dressing",
                "amount": 1.0,
                "consitency": "liquid",
                "id": 1034053,
                "image": "olive-oil.jpg",
                "measures": {
                    "metric": {
                        "amount": 1.0,
                        "unitLong": "Tbsp",
                        "unitShort": "Tbsp"
                    },
                    "us": {
                        "amount": 1.0,
                        "unitLong": "Tbsp",
                        "unitShort": "Tbsp"
                    }
                },
                "meta": [],
                "name": "extra virgin olive oil",
                "original": "1-2 tbsp extra virgin olive oil",
                "originalName": "extra virgin olive oil",
                "unit": "tbsp"
            },
            {
                "aisle": "Produce",
                "amount": 5.0,
                "consitency": "solid",
                "id": 11215,
                "image": "garlic.jpg",
                "measures": {
                    "metric": {
                        "amount": 5.0,
                        "unitLong": "cloves",
                        "unitShort": "cloves"
                    },
                    "us": {
                        "amount": 5.0,
                        "unitLong": "cloves",
                        "unitShort": "cloves"
                    }
                },
                "meta": [],
                "name": "garlic",
                "original": "5-6 cloves garlic",
                "originalName": "garlic",
                "unit": "cloves"
            },
            {
                "aisle": "Pasta and Rice",
                "amount": 6.0,
                "consitency": "solid",
                "id": 20420,
                "image": "fusilli.jpg",
                "measures": {
                    "metric": {
                        "amount": 170.097,
                        "unitLong": "grams",
                        "unitShort": "g"
                    },
                    "us": {
                        "amount": 6.0,
                        "unitLong": "ounces",
                        "unitShort": "oz"
                    }
                },
                "meta": [
                    "(I used linguine)"
                ],
                "name": "pasta",
                "original": "6-8 ounces pasta (I used linguine)",
                "originalName": "pasta (I used linguine)",
                "unit": "ounces"
            },
            {
                "aisle": "Spices and Seasonings",
                "amount": 2.0,
                "consitency": "solid",
                "id": 1032009,
                "image": "red-pepper-flakes.jpg",
                "measures": {
                    "metric": {
                        "amount": 2.0,
                        "unitLong": "pinches",
                        "unitShort": "pinches"
                    },
                    "us": {
                        "amount": 2.0,
                        "unitLong": "pinches",
                        "unitShort": "pinches"
                    }
                },
                "meta": [
                    "red"
                ],
                "name": "red pepper flakes",
                "original": "couple of pinches red pepper flakes, optional",
                "originalName": "couple of red pepper flakes, optional",
                "unit": "pinches"
            },
            {
                "aisle": "Spices and Seasonings",
                "amount": 2.0,
                "consitency": "solid",
                "id": 1102047,
                "image": "salt-and-pepper.jpg",
                "measures": {
                    "metric": {
                        "amount": 2.0,
                        "unitLong": "servings",
                        "unitShort": "servings"
                    },
                    "us": {
                        "amount": 2.0,
                        "unitLong": "servings",
                        "unitShort": "servings"
                    }
                },
                "meta": [
                    "to taste"
                ],
                "name": "salt and pepper",
                "original": "salt and pepper, to taste",
                "originalName": "salt and pepper, to taste",
                "unit": "servings"
            },
            {
                "aisle": "Produce",
                "amount": 3.0,
                "consitency": "solid",
                "id": 11291,
                "image": "spring-onions.jpg",
                "measures": {
                    "metric": {
                        "amount": 3.0,
                        "unitLong": "",
                        "unitShort": ""
                    },
                    "us": {
                        "amount": 3.0,
                        "unitLong": "",
                        "unitShort": ""
                    }
                },
                "meta": [
                    "white",
                    "green",
                    "separated",
                    "chopped"
                ],
                "name": "scallions",
                "original": "3 scallions, chopped, white and green parts separated",
                "originalName": "scallions, chopped, white and green parts separated",
                "unit": ""
            },
            {
                "aisle": "Alcoholic Beverages",
                "amount": 2.0,
                "consitency": "liquid",
                "id": 14106,
                "image": "white-wine.jpg",
                "measures": {
                    "metric": {
                        "amount": 2.0,
                        "unitLong": "Tbsps",
                        "unitShort": "Tbsps"
                    },
                    "us": {
                        "amount": 2.0,
                        "unitLong": "Tbsps",
                        "unitShort": "Tbsps"
                    }
                },
                "meta": [
                    "white"
                ],
                "name": "white wine",
                "original": "2-3 tbsp white wine",
                "originalName": "white wine",
                "unit": "tbsp"
            },
            {
                "aisle": "Pasta and Rice",
                "amount": 0.25,
                "consitency": "solid",
                "id": 99025,
                "image": "breadcrumbs.jpg",
                "measures": {
                    "metric": {
                        "amount": 59.147,
                        "unitLong": "milliliters",
                        "unitShort": "ml"
                    },
                    "us": {
                        "amount": 0.25,
                        "unitLong": "cups",
                        "unitShort": "cups"
                    }
                },
                "meta": [
                    "whole wheat",
                    "(I used panko)"
                ],
                "name": "whole wheat bread crumbs",
                "original": "1/4 cup whole wheat bread crumbs (I used panko)",
                "originalName": "whole wheat bread crumbs (I used panko)",
                "unit": "cup"
            }
        ],
        "summary": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good recipe to expand your main course repertoire. One portion of this dish contains approximately <b>19g of protein </b>,  <b>20g of fat </b>, and a total of  <b>584 calories </b>. For  <b>$1.63 per serving </b>, this recipe  <b>covers 23% </b> of your daily requirements of vitamins and minerals. This recipe serves 2. It is brought to you by fullbellysisters.blogspot.com. 209 people were glad they tried this recipe. A mixture of scallions, salt and pepper, white wine, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes approximately  <b>45 minutes </b>. All things considered, we decided this recipe  <b>deserves a spoonacular score of 83% </b>. This score is awesome. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/cauliflower-gratin-with-garlic-breadcrumbs-318375\">Cauliflower Gratin with Garlic Breadcrumbs</a>, < href=\"https://spoonacular.com/recipes/pasta-with-cauliflower-sausage-breadcrumbs-30437\">Pasta With Cauliflower, Sausage, & Breadcrumbs</a>, and <a href=\"https://spoonacular.com/recipes/pasta-with-roasted-cauliflower-parsley-and-breadcrumbs-30738\">Pasta With Roasted Cauliflower, Parsley, And Breadcrumbs</a>.",
        "winePairing": {
            "pairedWines": [
                "chardonnay",
                "gruener veltliner",
                "sauvignon blanc"
            ],
            "pairingText": "Chardonnay, Gruener Veltliner, and Sauvignon Blanc are great choices for Pasta. Sauvignon Blanc and Gruner Veltliner both have herby notes that complement salads with enough acid to match tart vinaigrettes, while a Chardonnay can be a good pick for creamy salad dressings. The Buddha Kat Winery Chardonnay with a 4 out of 5 star rating seems like a good match. It costs about 25 dollars per bottle.",
            "productMatches": [
                {
                    "id": 469199,
                    "title": "Buddha Kat Winery Chardonnay",
                    "description": "We barrel ferment our Chardonnay and age it in a mix of Oak and Stainless. Giving this light bodied wine modest oak character, a delicate floral aroma, and a warming finish.",
                    "price": "$25.0",
                    "imageUrl": "https://spoonacular.com/productImages/469199-312x231.jpg",
                    "averageRating": 0.8,
                    "ratingCount": 1.0,
                    "score": 0.55,
                    "link": "https://www.amazon.com/2015-Buddha-Kat-Winery-Chardonnay/dp/B00OSAVVM4?tag=spoonacular-20"
                }
            ]
        },
    }
    //let recipeElement = document.createElement("div");
    //recipeElement.textContent=()
    // console.log(result.extendedIngredients);
    for (let i = 0; i < result.extendedIngredients.length; i++) {
        // console.log(result.extendedIngredients[i].name);
        // console.log('extendedIngredient ', result.extendedIngredients[i]);
        let ingredient = await ingredients(result.extendedIngredients[i].id) // => {...many information about the ingredients}
        console.log('ingredient', ingredient)

        let recipeElement = document.createElement("div");
        let nutrition = ingredient.nutrition.nutrients[0]
        recipeElement.textContent=(ingredient.name + " " + nutrition.amount + " " + nutrition.unit)
        document.body.appendChild(recipeElement);

    }
    return result;
}
async function ingredients(ingredientId) {
    //let response = await fetch(" https://api.spoonacular.com/food/ingredients/" + ingredientId + "/information?apiKey="+ key);
    // let result = await response.json();
    let ingredient = {
        "id": 9266,
        "original": "pineapples",
        "originalName": "pineapples",
        "name": "pineapples",
        "nameClean": "pineapple",
        "amount": 1.0,
        "unit": "",
        "unitShort": "",
        "unitLong": "",
        "possibleUnits": [
            "piece",
            "slice",
            "fruit",
            "g",
            "oz",
            "cup",
            "serving"
        ],
        "estimatedCost": {
            "value": 299.0,
            "unit": "US Cents"
        },
        "consistency": "solid",
        "shoppingListUnits": [
            "pieces"
        ],
        "aisle": "Produce",
        "image": "pineapple.jpg",
        "meta": [],
        "nutrition": {
            "nutrients": [
                {
                    "name": "Calories",
                    "amount": 452.5,
                    "unit": "cal",
                    "percentOfDailyNeeds": 22.63
                },
                {
                    "name": "Fat",
                    "amount": 1.09,
                    "unit": "g",
                    "percentOfDailyNeeds": 1.67
                },
                {
                    "name": "Saturated Fat",
                    "amount": 0.08,
                    "unit": "g",
                    "percentOfDailyNeeds": 0.51
                },
                {
                    "name": "Carbohydrates",
                    "amount": 118.74,
                    "unit": "g",
                    "percentOfDailyNeeds": 39.58
                },
                {
                    "name": "Net Carbohydrates",
                    "amount": 106.07,
                    "unit": "g",
                    "percentOfDailyNeeds": 38.57
                },
                {
                    "name": "Sugar",
                    "amount": 89.14,
                    "unit": "g",
                    "percentOfDailyNeeds": 99.05
                },
                {
                    "name": "Cholesterol",
                    "amount": 0.0,
                    "unit": "mg",
                    "percentOfDailyNeeds": 0.0
                },
                {
                    "name": "Sodium",
                    "amount": 9.05,
                    "unit": "mg",
                    "percentOfDailyNeeds": 0.39
                },
                {
                    "name": "Protein",
                    "amount": 4.89,
                    "unit": "g",
                    "percentOfDailyNeeds": 9.77
                },
                {
                    "name": "Vitamin C",
                    "amount": 432.59,
                    "unit": "mg",
                    "percentOfDailyNeeds": 524.35
                },
                {
                    "name": "Manganese",
                    "amount": 8.39,
                    "unit": "mg",
                    "percentOfDailyNeeds": 419.47
                },
                {
                    "name": "Fiber",
                    "amount": 12.67,
                    "unit": "g",
                    "percentOfDailyNeeds": 50.68
                },
                {
                    "name": "Vitamin B6",
                    "amount": 1.01,
                    "unit": "mg",
                    "percentOfDailyNeeds": 50.68
                },
                {
                    "name": "Copper",
                    "amount": 1.0,
                    "unit": "mg",
                    "percentOfDailyNeeds": 49.78
                },
                {
                    "name": "Vitamin B1",
                    "amount": 0.72,
                    "unit": "mg",
                    "percentOfDailyNeeds": 47.66
                },
                {
                    "name": "Folate",
                    "amount": 162.9,
                    "unit": "µg",
                    "percentOfDailyNeeds": 40.73
                },
                {
                    "name": "Potassium",
                    "amount": 986.45,
                    "unit": "mg",
                    "percentOfDailyNeeds": 28.18
                },
                {
                    "name": "Magnesium",
                    "amount": 108.6,
                    "unit": "mg",
                    "percentOfDailyNeeds": 27.15
                },
                {
                    "name": "Vitamin B3",
                    "amount": 4.53,
                    "unit": "mg",
                    "percentOfDailyNeeds": 22.63
                },
                {
                    "name": "Vitamin B5",
                    "amount": 1.93,
                    "unit": "mg",
                    "percentOfDailyNeeds": 19.28
                },
                {
                    "name": "Vitamin B2",
                    "amount": 0.29,
                    "unit": "mg",
                    "percentOfDailyNeeds": 17.04
                },
                {
                    "name": "Iron",
                    "amount": 2.62,
                    "unit": "mg",
                    "percentOfDailyNeeds": 14.58
                },
                {
                    "name": "Calcium",
                    "amount": 117.65,
                    "unit": "mg",
                    "percentOfDailyNeeds": 11.77
                },
                {
                    "name": "Vitamin A",
                    "amount": 524.9,
                    "unit": "IU",
                    "percentOfDailyNeeds": 10.5
                },
                {
                    "name": "Zinc",
                    "amount": 1.09,
                    "unit": "mg",
                    "percentOfDailyNeeds": 7.24
                },
                {
                    "name": "Phosphorus",
                    "amount": 72.4,
                    "unit": "mg",
                    "percentOfDailyNeeds": 7.24
                },
                {
                    "name": "Vitamin K",
                    "amount": 6.34,
                    "unit": "µg",
                    "percentOfDailyNeeds": 6.03
                },
                {
                    "name": "Selenium",
                    "amount": 0.91,
                    "unit": "µg",
                    "percentOfDailyNeeds": 1.29
                },
                {
                    "name": "Vitamin E",
                    "amount": 0.18,
                    "unit": "mg",
                    "percentOfDailyNeeds": 1.21
                }
            ],
            "properties": [
                {
                    "name": "Glycemic Index",
                    "amount": 58.67,
                    "unit": ""
                },
                {
                    "name": "Glycemic Load",
                    "amount": 62.23,
                    "unit": ""
                }
            ],
            "caloricBreakdown": {
                "percentProtein": 3.88,
                "percentFat": 1.94,
                "percentCarbs": 94.18
            },
            "weightPerServing": {
                "amount": 905,
                "unit": "g"
            }
        },
        "categoryPath": [
            "tropical fruit",
            "fruit"
        ]
    }
    // console.log("Ingredient", result);
    return ingredient;
}