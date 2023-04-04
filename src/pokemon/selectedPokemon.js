import $ from 'jquery';
import {capitalize} from "../utils/utils.js";


export const generateTypes = () => {
    let types = []
    $.ajax({
        url: 'https://pokeapi.co/api/v2/type',
        type: 'GET',
        dataType: 'json',
    }).then((response) => {
        response.results.map((type) => {
            $.ajax({
                url: type.url,
                type: 'GET',
                dataType: 'json',
            }).then((type) => {
                types.push({ value: type.id, text: capitalize(type.name)})
            })
        });
    }).catch(function(error) {
        console.log(error);
    });
    // console.log(types)
    return types;
}

export const showPokemonBytype = (type) => {
    $.ajax({
        url: `https://pokeapi.co/api/v2/type/${type}`,
        type: 'GET',
        dataType: 'json',
        }).then((response) => {
            response.pokemon.map((pokemons) => {
                $.ajax({
                    url: pokemons.pokemon.url,
                    type: 'GET',
                    dataType: 'json',
                }).then((pokemon) => {
                    // console.log(pokemon);
                    $("#pokelist").append(`<div class="pokemon">
                    <div class="pokemon-img" data-toggle="modal" data-target="#poke${pokemon.id}">
                        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="" style="width: 150px; height: 100px" id="${pokemon.id}">
                    </div>
                    <p>#${pokemon.id}</p>
                    <div class="pokemon-name">
                        <h3>${capitalize(pokemon.name)}</h3>
                    </div>
                    <div class="pills">
                        ${pokemon.types.map((type) => {
                            return `<span class="pill ml-1 ${type.type.name}">${type.type.name}</span>`
                        }).join('')}
                    </div>
                </div>
                <div
        class="modal fade"
        id="poke${pokemon.id}"
        tabindex="-1"
        role="dialog"
        aria-labelledby="poke${pokemon.id}Label"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="poke${pokemon.id}Label">${capitalize(pokemon.name)}</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
                <div class="row">
                  <div class="col-md-6">
                    <img src="${pokemon.sprites.other.dream_world.front_default}" alt="" class="w-100">
                  </div>
                  <div class="col-md-6 p-3">
                  <div class="pills mb-3">
                        ${pokemon.types.map((type) => {
                            return `<span class="pill ml-1 ${type.type.name}">${type.type.name}</span>`
                        }).join('')}
                    </div>
                    <div class="stats p-3">
                        <strong>STATISTIC</strong>
                        ${pokemon.stats.map((stat) => {
                            return `
                        <div class="label d-flex justify-content-between mt-2">
                          <p class="">${capitalize(stat.stat.name)}</p>
                          <p>${stat.base_stat}</p>
                        </div>
                        <span style="width: ${stat.base_stat <= 100 ? stat.base_stat: "100"}%; border: 2px solid white"></span>`}).join('')}
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>`);
                });
            });
        }).catch(function(error) {
            console.log(error);
        });
}