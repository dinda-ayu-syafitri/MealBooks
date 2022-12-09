class RecipeDetail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set recipe(recipe) {
    this._recipe = recipe;
  }

  render() {
    this.innerHTML = "";
    this.innerHTML = `
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
