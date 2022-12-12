import "./meal-item.js";
import "./recipe-btn.js";
import css from "bootstrap/dist/css/bootstrap.min.css";

class RecipeDetail extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set recipe(recipe) {
    this._recipe = recipe;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = "";
    this.shadowDOM.innerHTML = `
    <style>
        ${css}
      </style>
    <h1>Recipe</h1>
    <div class="container">
      <div class="row">
        <h3>${this._recipe.title}</h3>
      </div>

      <div class="row">
        <img src="${this._recipe.image}" alt="" />
      </div>

      <div class="row">
        <h5>Ingredients</h5>
        
        <ol>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ol>
      </div>
    </div>
      `;
  }
}
customElements.define("recipe-detail", RecipeDetail);
