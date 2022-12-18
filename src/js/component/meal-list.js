import css from 'bootstrap/dist/css/bootstrap.min.css';
import './meal-item.js';
import './recipe-btn.js';

class MealList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set meals(meals) {
    this._meals = meals;
    this.render();
  }

  handleEvent(ev) {
    console.log(ev.target.id);
    this.ev.stopPropagation();
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

        recipe-btn {
          bottom = 0;
        }
      </style>
      
    `;

    this._meals.forEach((meal) => {
      const mealItemContainer = document.createElement('div');
      mealItemContainer.setAttribute(
        'class',
        'm-3 p-2 card border-white shadow col-lg-3 col-sm-12 row flex-column justify-content-between'
      );
      const mealItemElement = document.createElement('meal-item');
      const recipeBtn = document.createElement('recipe-btn');
      recipeBtn.setAttribute('id', meal.id);
      mealItemElement.meal = meal;
      this.shadowDOM.appendChild(mealItemContainer);
      mealItemContainer.appendChild(mealItemElement);
      mealItemContainer.appendChild(recipeBtn);
    });

    this.shadowRoot.addEventListener('click', this);
  }
}
customElements.define('meal-list', MealList);
