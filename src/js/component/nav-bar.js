import css from "bootstrap/dist/css/bootstrap.min.css";

class NavBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
        ${css}
      </style>
    <div class="container my-3">
  <h2>Meal Books</h2>
</div>
    `;
  }
}

customElements.define("nav-bar", NavBar);
