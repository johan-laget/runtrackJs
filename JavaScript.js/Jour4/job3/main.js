document.getElementById('filtrer').addEventListener('click', function () {
    var id = document.getElementById('id').value.trim();
    var nom = document.getElementById('nom').value.trim();
    var type = document.getElementById('type').value.trim();

    fetch('pokemon.json')
    .then(response => response.json())
    .then(data => {
        var filteredPokemon = data.filter(function(pokemon) {
            return (id === '' || pokemon.id.toString() === id) &&
                   (nom === '' || pokemon.name.french.toLowerCase().includes(nom.toLowerCase())) &&
                   (type === '' || pokemon.type.includes(type));
        });

        displayPokemon(filteredPokemon);
    })
    .catch(error => console.error('Erreur lors du chargement du fichier JSON:', error));
});

function displayPokemon(pokemonList) {
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (pokemonList.length === 0) {
        resultDiv.innerHTML = 'Aucun Pokémon trouvé.';
        return;
    }

    var ul = document.createElement('ul');
    pokemonList.forEach(function(pokemon) {
        var li = document.createElement('li');

        if (document.getElementById('id').value.trim() !== '') {
            li.textContent = `Nom: ${pokemon.name.french}, Types: ${pokemon.type.join(', ')}, Base: ${JSON.stringify(pokemon.base)}`;
        } else if (document.getElementById('type').value.trim() !== '') {
            li.textContent = `Nom: ${pokemon.name.french}, ID: ${pokemon.id}, Base: ${JSON.stringify(pokemon.base)}`;
        } else {
            li.textContent = `Nom: ${pokemon.name.french}, Base: ${JSON.stringify(pokemon.base)}`;
        }
        
        ul.appendChild(li);
    });
    resultDiv.appendChild(ul);
}
