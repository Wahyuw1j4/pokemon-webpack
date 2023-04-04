import "../assets/style.scss";
import $ from "jquery";
import "./components.js";
import {
  showPokemon,
  infiniteScroll,
  clearPokemon,
} from "./pokemon/listPokemon.js";
import "./selectedComponent"

import { showPokemonBytype } from "./pokemon/selectedPokemon.js";


const shadow = $("select-poke")[0].shadowRoot;
const select = $(shadow).find("#type");

setTimeout(() => {
  console.log(select.val());
  if (select.val() === "all") {
    clearPokemon();
    showPokemon();
    infiniteScroll();
  }
}, 2000);

select.on("change", (event) => {
    const value = event.target.value;
    console.log("Selected value:", value);
    if (value === "all") {
      clearPokemon();
      showPokemon();
      infiniteScroll();
    } else {
        clearPokemon();
        showPokemonBytype(value)
        }
  });
  
console.log("Hello World!");
