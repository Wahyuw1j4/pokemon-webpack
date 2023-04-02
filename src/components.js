class pokeSearch extends HTMLElement {
  constructor() {
    super();
    this.textContent = "ini search";
  }
}

customElements.define("poke-search", pokeSearch);
