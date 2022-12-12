import "./component/search-bar.js";
import "./component/meal-list.js";
import "./component/meal-item.js";
import "./component/recipe-btn.js";
import "./component/recipe-detail.js";
import DataSource from "../js/data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const mealListElement = document.querySelector("meal-list");
  const mealItemElement = document.querySelector("meal-item");
  const recipeBtnElement = document.querySelector("recipe-btn");
  const recipeDetailElement = document.querySelector("recipe-detail");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchMeal(searchElement.value);
      renderResultSearch(result);
    } catch (message) {
      fallbackResultSearch(message);
    }
  };

  const renderResultSearch = (results) => {
    mealListElement.meals = results;
  };

  const fallbackResultSearch = (message) => {
    mealListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;

  const onButtonRecipeClicked = async () => {
    try {
      const result = await DataSource.getRecipe(769754);
      renderResultRecipe(result);
      console.log("test");
    } catch (message) {
      fallbackResultRecipe(message);
    }
  };

  const renderResultRecipe = (extendedIngredients) => {
    recipeDetailElement.recipe = extendedIngredients;
    console.log("test");
  };

  const fallbackResultRecipe = (message) => {
    console.log(message);
  };

  recipeBtnElement.clickEvent = onButtonRecipeClicked;
};

export default main;
