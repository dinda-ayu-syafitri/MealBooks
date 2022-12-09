class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="container my-3">
  <h2>Meal Books</h2>
</div>
    `;
  }
}

customElements.define("nav-bar", NavBar);
