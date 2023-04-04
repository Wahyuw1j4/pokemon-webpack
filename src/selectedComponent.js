import { generateTypes } from "./pokemon/selectedPokemon";
class pokemonSelect extends HTMLElement {
  constructor() {
    super();

    // Membuat shadow DOM
    this.attachShadow({ mode: "open" });

    // Membuat elemen dalam shadow DOM
    const label = document.createElement("label");
    label.setAttribute("for", "type");
    label.textContent = "Pilih type:";
    const select = document.createElement("select");
    select.setAttribute("id", "type");
    select.setAttribute("name", "type");
    const style = document.createElement("style");
    style.textContent = `
      /* Gaya untuk label */
      label {
        display: block;
        margin-bottom: 0.5rem;
      }
      
      /* Gaya untuk elemen select */
      select {
        padding: 0.5rem;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 0.25rem;
        background-color: #fff;
      }
    `;

    // generate option from generateTypes its async

    let options = [{ value: "all", text: "Show All" }]; 
    let types = generateTypes();
    
    console.log(options, "dari selectedComponent");
    setTimeout(() => {
      types.forEach((type) => {
        options.push(type);
      })
      options.forEach((option) => {
        const opt = document.createElement("option");
        opt.setAttribute("value", option.value);
        opt.textContent = option.text;
        select.appendChild(opt);
      });
    }, 500);

    // Menambahkan elemen ke shadow DOM
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(label);
    this.shadowRoot.appendChild(select);
  }
}

// Mendefinisikan custom element
customElements.define("select-poke", pokemonSelect);
