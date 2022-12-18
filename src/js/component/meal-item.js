import css from 'bootstrap/dist/css/bootstrap.min.css';
import './recipe-btn.js';

class MealItem extends HTMLElement {
  constructor(ev) {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
    this._event = ev;
  }

  set meal(meal) {
    this._meal = meal;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector('.recipeId').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
        ${css}
      </style>
    <div class="card border-light h-100">
    <img src="${this._meal.image}" class="card-img-top w-100" alt="${this._meal.title}" />
    <div class="card-body">
      <h5 class="card-title">
      ${this._meal.title}
      </h5>
      <input type="hidden" class="recipeId" value="${this._meal.id}">
    </div>
  </div>
    `;
  }
}

customElements.define('meal-item', MealItem);
