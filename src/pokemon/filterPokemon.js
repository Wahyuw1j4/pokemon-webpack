import $ from "jquery";
import {showPokemon, loadPokemon, infiniteScroll ,clearPokemon} from "./listPokemon.js";


export const listType = () => {
    $.ajax({
        url: `https://pokeapi.co/api/v2/type`,
        type: "GET",
        dataType: "json",
      }).then((response) => {
        response.results.map((types) => {
          $(".filter-list").append(`
              <div class="filter-item">
                  <input type="checkbox" id="${types.name}" />
                  <label for="${types.name}">${types.name}</label>
                </div>
              `);
        });
      });      
};

export const checkAll = () => {
  console.log("checkAll");
  if ($("#all").is(":checked")) {
    $(".filter-list input").each(function () {
      $(this).prop("checked", true);
    });
    infiniteScroll();
    showPokemon();
  }else if ($("#all").is(":not(:checked)")) {
    $(".filter-list input").each(function () {
      $(this).prop("checked", false);
    });
    clearPokemon();
  } else {
    $(".filter-list input").each(function () {
      $(this).prop("checked", false);
      clearPokemon();
    });
  }
};







