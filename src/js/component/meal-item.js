class MealItem extends HTMLElement {
  set meal(meal) {
    this._meal = meal;
    this.render();
  }

  get value() {
    return this.querySelector("#idMeal").value;
  }

  render() {
    this.innerHTML = `
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
        <button href="recipe.html" class="btn btn-primary" type="submit">See Recipe</button>
    </div>
  </div>
    `;
  }
}

customElements.define("meal-item", MealItem);
