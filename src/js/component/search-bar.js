import css from "bootstrap/dist/css/bootstrap.min.css";

class SearchBar extends HTMLElement {
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

  get value() {
    return this.shadowDOM.querySelector("#searchElement").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
        ${css}
      </style>
    <div id="search-container" class="search-container container">
    <div class="row">
      <div class="col-9">
        <input
          placeholder="Search Meal"
          id="searchElement"
          class="form-control"
          type="search"
        />
      </div>
      <div class="col-3">
        <button id="searchButtonElement" class="btn btn-primary" type="submit">
          Search
        </button>
      </div>
    </div>
  </div>
    `;

    this.shadowDOM
      .querySelector("#searchButtonElement")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
