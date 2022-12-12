import css from "bootstrap/dist/css/bootstrap.min.css";
import "./recipe-btn.js";

class MealItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback(event) {
    this._clickEvent = event;
  }

  set meal(meal) {
    this._meal = meal;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#idMeal").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
        ${css}
      </style>
    <div class="card m-3">
    <img src="${this._meal.image}" class="card-img-top w-100" alt="${this._meal.title}" />
    <div class="card-body">
      <h5 class="card-title">
      ${this._meal.title}
      </h5>
      <input
          id="idMeal"
          class="form-control"
          type="hidden"
          value="${this._meal.id}"
        />
        <recipe-btn></recipe-btn>
    </div>
  </div>
    `;
  }
}

customElements.define("meal-item", MealItem);
