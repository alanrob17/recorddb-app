'use strict';

// debugger;
let artists = getSavedArtists();

const filters = {
    searchText: ''
}

renderArtists(artists, filters);

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    
    renderArtists(artists, filters);
});

document.querySelector('#return').addEventListener('click', (e) => {
    location.assign('./index.html');
});

const returnButtonElement = document.createElement('button');
returnButtonElement.className = 'btn btn-primary rounded mb-2 move-down'; 
returnButtonElement.innerHTML = '  Back  '; 
returnButtonElement.id = 'return'; 
document.querySelector('#return').appendChild(returnButtonElement);
