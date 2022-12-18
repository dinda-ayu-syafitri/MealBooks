import './meal-item.js';
import './recipe-btn.js';
import css from 'bootstrap/dist/css/bootstrap.min.css';

class RecipeDetail extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set recipe(recipe) {
    this._recipe = recipe;
    this.render();
  }

  handleEvent(ev) {
    ev.stopPropagation();
  }

  render() {
    this.shadowDOM.innerHTML = '';
    this.shadowDOM.innerHTML = `
    <style>
        ${css}

        #quickInfo {
          background-color: #fad68a;
          font-size: 18px;
          text-align: center;
        }
  
        #quickInfo .icon {
          font-size: 35px;
        }

        .red {
          color: #ab6a6a;
        }

        .green {
          color: #8bab6a;
        }

        .back i , .back span{
          font-size: 20px;
        }

        h5 {
          font-size: 25px;
        }

        h2 {
          font-size: 35px;
          color: #f19a33;
        }

        h3 {
          font-size: 30px;
          color: #f19a33;
        }
      </style>
      <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
      integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />

    <div class="container my-5">
    <div class="back my-4">
          <button class="btn " id="backBtn"><i class="fa-solid fa-left-long me-2" ></i><span>Back</span>
          </button>
        </div>
    <h5>Recipe</h5>
      <div class="row">
        <h2><b>${this._recipe.title}</b></h2>
      </div>

      <div class="row my-3">
      <div class="col-lg-7 col-md-12">
      <img src="${this._recipe.image}" alt="${this._recipe.title}" class="w-100 rounded-5"/>
</div>
<div class="col-lg-5 col-md-12 rounded-5 p-5" id="quickInfo">
  <div class="row mb-5">
    <div class="col" id="time"><i class="fa-solid fa-stopwatch icon mb-2 green"></i></div>
    <div class="col" id="servings"><i class="fa-solid fa-utensils icon mb-2 green"></i></div>
  </div>

  <div class="row">
    <div class="col" id="vegan"></div>
    <div class="col" id="gluten"></div>
    <div class="col" id="dairy"></div>
  </div>
</div>
      </div>

      <div class="row mt-4">
        <p>${this._recipe.summary}</p>
        </div>

      
      <div class="row">
        <h3><b>Ingredients</b></h3>        
        <ul id="ingredientList">

        </ul>
      </div>

      <div class="row" id="instruction">
        <h3><b>Cooking Instructions</b></h3>        

      </div>
    </div>

      `;

    this._recipe.extendedIngredients.forEach((ingredients) => {
      const ingredientsItem = document.createElement('li');
      ingredientsItem.innerText = ingredients.original;
      ingredientsItem.ingredients = ingredients;
      this.shadowDOM
        .getElementById('ingredientList')
        .appendChild(ingredientsItem);
    });

    const getInstructions = () => {
      if (this._recipe.instructions === null) {
        const instruction = document.createElement('p');
        instruction.innerText = `Instruksi untuk resep ${this._recipe.title} belum tersedia`;
        this.shadowDOM.getElementById('instruction').appendChild(instruction);
      } else {
        const instruction = document.createElement('p');
        instruction.innerText = this._recipe.instructions;
        this.shadowDOM.getElementById('instruction').appendChild(instruction);
      }
    };

    const getQuickInfo = () => {
      // Info Waktu
      if (this._recipe.readyInMinutes === null) {
        const time = document.createElement('p');
        time.innerText = `Time estimation not yet defined`;
        this.shadowDOM.getElementById('time').appendChild(time);
      } else {
        const time = document.createElement('p');
        time.innerText = `${this._recipe.readyInMinutes} Minutes`;
        this.shadowDOM.getElementById('time').appendChild(time);
      }
      // Info Porsi
      if (this._recipe.servings === null) {
        const servings = document.createElement('p');
        servings.innerText = `Portions estimation not yet defined`;
        this.shadowDOM.getElementById('servings').appendChild(servings);
      } else {
        const servings = document.createElement('p');
        servings.innerText = `${this._recipe.servings} Servings`;
        this.shadowDOM.getElementById('servings').appendChild(servings);
      }
      // Info Vegan
      if (this._recipe.vegan === null) {
        const vegan = document.createElement('p');
        const icon = document.createElement('i');
        vegan.innerText = `Vegan Info not available`;
        icon.className = `fa-solid fa-seedling icon mb-2 red`;
        this.shadowDOM.getElementById('vegan').appendChild(icon);
        this.shadowDOM.getElementById('vegan').appendChild(vegan);
      } else if (this._recipe.vegan === true) {
        const vegan = document.createElement('p');
        const icon = document.createElement('i');
        vegan.innerText = `Vegan`;
        icon.className = `fa-solid fa-seedling icon mb-2 green`;
        this.shadowDOM.getElementById('vegan').appendChild(icon);
        this.shadowDOM.getElementById('vegan').appendChild(vegan);
      } else {
        const vegan = document.createElement('p');
        const icon = document.createElement('i');
        vegan.innerText = `Not Vegan`;
        icon.className = `fa-solid fa-seedling icon mb-2 red`;
        this.shadowDOM.getElementById('vegan').appendChild(icon);
        this.shadowDOM.getElementById('vegan').appendChild(vegan);
      }
      // Info Gluten
      if (this._recipe.glutenFree === null) {
        const gluten = document.createElement('p');
        const icon = document.createElement('i');
        gluten.innerText = `Gluten Info not available`;
        icon.className = `fa-solid fa-cow icon mb-2 red`;
        this.shadowDOM.getElementById('gluten').appendChild(icon);
        this.shadowDOM.getElementById('gluten').appendChild(gluten);
      } else if (this._recipe.glutenFree === true) {
        const gluten = document.createElement('p');
        const icon = document.createElement('i');
        gluten.innerText = `Gluten Free`;
        icon.className = `fa-solid fa-cow icon mb-2 green`;
        this.shadowDOM.getElementById('gluten').appendChild(icon);
        this.shadowDOM.getElementById('gluten').appendChild(gluten);
      } else {
        const gluten = document.createElement('p');
        const icon = document.createElement('i');
        gluten.innerText = `Not Gluten Free`;
        icon.className = `fa-solid fa-cow icon mb-2 red`;
        this.shadowDOM.getElementById('gluten').appendChild(icon);
        this.shadowDOM.getElementById('gluten').appendChild(gluten);
      }
      // Info Dairy
      if (this._recipe.dairyFree === null) {
        const dairy = document.createElement('p');
        const icon = document.createElement('i');
        dairy.innerText = `Dairy Info not available`;
        icon.className = `fa fa-solid fa-wheat-awn icon mb-2 red`;
        this.shadowDOM.getElementById('dairy').appendChild(icon);
        this.shadowDOM.getElementById('dairy').appendChild(dairy);
      } else if (this._recipe.dairyFree === true) {
        const dairy = document.createElement('p');
        const icon = document.createElement('i');
        dairy.innerText = `Dairy Free`;
        icon.className = `fa fa-solid fa-wheat-awn icon mb-2 green`;
        this.shadowDOM.getElementById('dairy').appendChild(icon);
        this.shadowDOM.getElementById('dairy').appendChild(dairy);
      } else {
        const dairy = document.createElement('p');
        const icon = document.createElement('i');
        dairy.innerText = `Not Dairy Free`;
        icon.className = `fa fa-solid fa-wheat-awn icon mb-2 red`;
        this.shadowDOM.getElementById('dairy').appendChild(icon);
        this.shadowDOM.getElementById('dairy').appendChild(dairy);
      }
    };

    getInstructions();
    getQuickInfo();
    this.shadowRoot.addEventListener('click', this);
  }
}
customElements.define('recipe-detail', RecipeDetail);
