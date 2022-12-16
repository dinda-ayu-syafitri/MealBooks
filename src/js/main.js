import "./component/search-bar.js";
import "./component/meal-list.js";
import "./component/recipe-detail.js";
import DataSource from "../js/data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const mealListElement = document.querySelector("meal-list");
  const recipeDetailElement = document.querySelector("recipe-detail");

  const onButtonSearchClicked = async () => {
    try {
      recipeDetailElement.style.display = "none";
      mealListElement.style.display = "";
      const result = await DataSource.searchMeal(searchElement.value);
      renderResultSearch(result);
      getMealItem();
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

  const onButtonRecipeClicked = async (id) => {
    try {
      const result = await DataSource.getRecipe(id);
      renderResultRecipe(result);
      recipeDetailElement.style.display = "";
      mealListElement.style.display = "none";
    } catch (message) {
      fallbackResultRecipe(message);
    }
  };

  const renderResultRecipe = (results) => {
    recipeDetailElement.recipe = results;
  };

  const fallbackResultRecipe = (message) => {
    mealListElement.renderError(message);
  };

  const getMealItem = () => {
    const mealItem = mealListElement.shadowRoot.querySelectorAll("recipe-btn");
    for (let i = 0; i < mealItem.length; i++) {
      mealItem[i].addEventListener("click", () => {
        onButtonRecipeClicked(mealItem[i].id);
      });
    }
  };
};

export default main;
