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
    <div class="card">
    <img src="${this._meal.image}" class="card-img-top" alt="${this._meal.title}" />
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
        <a href="recipe.html" class="btn btn-primary" id="recipeButton" >See Recipe</a>
    </div>
  </div>
    `;

    this.querySelector("#recipeButton").addEventListener(
      "click",
      this._clickEvent
    );
  }
}

customElements.define("meal-item", MealItem);
