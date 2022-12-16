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
    @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css")
        ${css}
      </style>
   
    <div class="container my-3">
    <h5>Recipe</h5>
      <div class="row">
        <h2>${this._recipe.title}</h2>
      </div>

      <div class="row">
      <div class="col-7">
      <img src="${this._recipe.image}" alt="" class="w-100"/>
</div>

<div class="col-5">
    <div class="row">
      <div class="col"><p>45 Minutes</p></div>
      <div class="col"><p>1 Servings</p></div>
    </div>

    <div class="row">
      <div class="col"><p>Vegan</p></div>
      <div class="col"><i class="fa fa-solid fa-wheat-awn"></i><p>Gluten Free</p></div>
      <div class="col"><p>Dairy Free</p></div>
    </div>
  </div>
      </div>

      <div class="row">
      <p>${this._recipe.summary}</p>
      </div>

      <div class="row">
        <h5>Ingredients</h5>        
        <ul id="ingredientList">
        </ul>
      </div>

      <div class="row" id="instruction">
        <h5>How to cook</h5>        
      </div>
    </div>
      `;

    this._recipe.extendedIngredients.forEach((ingredients) => {
      const ingredientsItem = document.createElement("li");
      ingredientsItem.innerText = ingredients.original;
      ingredientsItem.ingredients = ingredients;
      this.shadowDOM
        .getElementById("ingredientList")
        .appendChild(ingredientsItem);
    });

    const getInstructions = () => {
      if (this._recipe.instructions == null) {
        const instruction = document.createElement("p");
        instruction.innerText = `Instruksi untuk resep ${this._recipe.title} belum tersedia`;
        this.shadowDOM.getElementById("instruction").appendChild(instruction);
      } else {
        const instruction = document.createElement("p");
        instruction.innerText = this._recipe.instructions;
        this.shadowDOM.getElementById("instruction").appendChild(instruction);
      }
    };

    getInstructions();
  }
}
customElements.define("recipe-detail", RecipeDetail);
