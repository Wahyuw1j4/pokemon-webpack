import "../assets/style.scss";
import "./components.js";

import $ from "jquery";
import { listType, checkAll } from "./pokemon/filterPokemon.js";

listType();

setTimeout(() => {
    checkAll();
}, 1000);

$("#all").on("click", () => {
    console.log("click");
    checkAll();
})



console.log("Hello World!");