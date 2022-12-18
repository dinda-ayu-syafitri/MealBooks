import css from 'bootstrap/dist/css/bootstrap.min.css';

class RecipeBtn extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
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

        .btn {
          background-color : #f19a33;
          color: #fff;
        }

        .btn:hover {
          background-color : #fff;
          color : #f19a33;
          border : 1px solid #f19a33;
        }
      </style>
      <a class="btn w-100" id="recipeBtn">See Recipe</a>
    `;

    this.shadowDOM
      .querySelector('#recipeBtn')
      .addEventListener('click', this._clickEvent);
  }
}

customElements.define('recipe-btn', RecipeBtn);
