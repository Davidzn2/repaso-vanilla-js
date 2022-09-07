function getPokemons() {
    fetch('https://swapi.dev/api/people')
        .then((response) => response.json())
        .then((data) => {
            let characters = data.results
            let container = document.getElementById('characters__container')
            console.log(characters)
            container.innerHTML = characters.map((character) => {
                return (
                `
                <ul class="characters__list">
                    <li>Name: ${character.name}</li>
                    <li>Height: ${character.height}</li>
                    <li>Mass: ${character.mass}
                </ul>
                `
             )
            })
        })
        .catch((err) => console.log(err))
}

getPokemons()