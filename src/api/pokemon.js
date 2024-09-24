const listaPokemon = document.querySelector("#lista-pokemon");



fetch("https://pokeapi.co/api/v2/pokemon")
.then (response => response.json())
.then (data  => console.log(data.results))

fetch("https://pokeapi.co/api/v2/pokemon")
.then (response => response.json())
.then (data  => {

    const pokemon = data.results;
    pokemon.forEach(element => {
        const li = document.createElement("li");
        li.innerText= element.name;
        listaPokemon.append(li);
        });


})