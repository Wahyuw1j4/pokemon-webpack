import $ from "jquery";


let limit = 50;
let offset = 0;

export const showPokemon = () => {
    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
        type: 'GET',
        dataType: 'json',
        }).then((response) => {
            response.results.map((pokemons) => {
                $.ajax({
                    url: pokemons.url,
                    type: 'GET',
                    dataType: 'json',
                }).then((pokemon) => {
                    // console.log(pokemon);
                    $("#pokelist").append(`<div class="pokemon">
                    <div class="pokemon-img">
                        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="" style="width: 150px; height: 100px">
                    </div>
                    <p>#${pokemon.id}</p>
                    <div class="pokemon-name">
                        <h3>${pokemon.name}</h3>
                    </div>
                    <div class="pills">
                        ${pokemon.types.map((type) => {
                            return `<span class="pill ${type.type.name}">${type.type.name}</span>`
                        })}
                    </div>
                </div>`);
                });
            });
        }).catch(function(error) {
            console.log(error);
        });
};


export const loadPokemon = () => {
    offset += limit;
    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
        type: 'GET',
        dataType: 'json',
        }).then((response) => {
            response.results.map((pokemons) => {
                $.ajax({
                    url: pokemons.url,
                    type: 'GET',
                    dataType: 'json',
                }).then((pokemon) => {
                    // console.log(pokemon);
                    $("#pokelist").append(`<div class="pokemon">
                    <div class="pokemon-img">
                        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="" style="width: 150px; height: 100px">
                    </div>
                    <p>#${pokemon.id}</p>
                    <div class="pokemon-name">
                        <h3>${pokemon.name}</h3>
                    </div>
                    <div class="pills">
                        ${pokemon.types.map((type) => {
                            return `<span class="pill ${type.type.name}">${type.type.name}</span>`
                        })}
                    </div>
                </div>`);
                });
            });
        }).catch(function(error) {
            console.log(error);
        }
    );
}

export const infiniteScroll = () => {
    $(window).scroll(function() {
        console.log($(window).scrollTop() + $(window).height(), $(document).height())
        if($(window).scrollTop() + $(window).height() >= $(document).height()) {
            loadPokemon();
        }
    });
}


export const clearPokemon = () => {
    $("#pokelist").empty();
}




