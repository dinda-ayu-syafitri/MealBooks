import css from 'bootstrap/dist/css/bootstrap.min.css';

class SearchBar extends HTMLElement {
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

  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
        ${css}

        .btn {
          background-color : #fad68a;
        }

        .btn:hover {
          background-color : #fff;
          color : #f19a33;
          border : 1px solid #f19a33;
        }
      </style>
      <div id="search-container" class="mt-5 row">
      <div class="col-8">
        <input
          placeholder="Search Meal"
          id="searchElement"
          class="form-control"
          type="search"
        />
      </div>
      <div class="col-4">
        <button id="searchButtonElement" class="btn" type="submit">Search</button>
      </div>
    </div>
    `;

    this.shadowDOM
      .querySelector('#searchButtonElement')
      .addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
