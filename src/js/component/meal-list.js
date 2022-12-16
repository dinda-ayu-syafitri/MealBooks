import css from "bootstrap/dist/css/bootstrap.min.css";
import "./meal-item.js";
import "./recipe-btn.js";

class MealList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set meals(meals) {
    this._meals = meals;
    this.render();
  }

  handleEvent(ev) {
    console.log(ev.target.id);
    ev.stopPropagation();
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
    <style>
        ${css}  
      </style>
    `;
    this.shadowDOM.innerHTML += `<h2 class="text-center">${message}</h2>`;
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
        ${css}
      </style>
      
    `;

    this._meals.forEach((meal) => {
      const mealItemContainer = document.createElement("div");
      mealItemContainer.setAttribute("class", "m-3");
      const mealItemElement = document.createElement("meal-item");
      const recipeBtn = document.createElement("recipe-btn");
      recipeBtn.setAttribute("id", meal.id);
      mealItemElement.meal = meal;
      this.shadowDOM.appendChild(mealItemContainer);
      mealItemContainer.appendChild(mealItemElement);
      mealItemContainer.appendChild(recipeBtn);
    });

    this.shadowRoot.addEventListener("click", this);
  }
}
customElements.define("meal-list", MealList);
