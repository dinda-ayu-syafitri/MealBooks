import css from "bootstrap/dist/css/bootstrap.min.css";

class RecipeBtn extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
        ${css}
      </style>
      <a class="btn btn-primary" id="recipeBtn">See Recipe</a>
    `;

    this.shadowDOM
      .querySelector("#recipeBtn")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("recipe-btn", RecipeBtn);
