import css from 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
        ${css}
        @import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

        * {
        font-family: 'Quicksand', sans-serif;
        }
        
        .nav-bar {
          background-color : #f19a33;
        }
        
      </style>
    <div class="text-center mb-5 py-1 text-white nav-bar">
  <h2>Meal Books</h2>
</div>
    `;
  }
}

customElements.define('nav-bar', NavBar);
