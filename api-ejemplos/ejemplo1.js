fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then(response => response.json()) //Cambio el formato de json a una estructura reconocida en js
.then(data => {
    console.log(data.name)
    console.log(data.height)
    console.log(data.id)
})