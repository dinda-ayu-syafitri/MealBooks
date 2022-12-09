import "./component/search-bar.js";
import "./component/meal-list.js";
import "./component/meal-item.js";
import DataSource from "../js/data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const mealListElement = document.querySelector("meal-list");
  const mealItemElement = document.querySelector("meal-item");

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
      const result = await DataSource.getRecipe(mealItemElement.value);
      renderResultRecipe(result);
    } catch (message) {
      fallbackResultRecipe(message);
    }
  };

  const renderResultRecipe = (results) => {
    mealListElement.meals = results;
  };

  const fallbackResultRecipe = (message) => {
    mealListElement.renderError(message);
  };

  mealItemElement.clickEvent = onButtonRecipeClicked;
};

export default main;
