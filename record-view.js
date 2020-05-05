'use strict';

// get array from location.hash
const hashArray  = (hash) => {
    const arrayValues = hash.split("-");
    return arrayValues;
}

const renderAlbum = (artist, record) => {
    const biography = artist.biography;

    document.querySelector('#artist').innerHTML = '';
    document.querySelector('#biography').innerHTML = '';
    document.querySelector('#album').innerHTML = '';
    document.querySelector('#review').innerHTML = '';

    const rating = getRecordRating(record.rating);

    const media = getRecordMedia(record.media);
     
    const bought = getRecordBoughtDate(record.bought);

    const review = record.review;

    const pressing = getRecordPressing(record.pressing);
    
    const artistElement = document.createElement('h3');
    const nameElement = document.createElement('h2');
    const recordedElement = document.createElement('p');
    const fieldElement = document.createElement('p');
    const labelElement = document.createElement('p');
    const pressingElement = document.createElement('p');
    const ratingElement = document.createElement('p');
    const discsElement = document.createElement('p');
    const mediaElement = document.createElement('p');
    const boughtElement = document.createElement('p');
    const costElement = document.createElement('p');
    const reviewElement = document.createElement('div');
    reviewElement.className = 'smaller'; 
    const reviewButtonElement = document.createElement('button');
    reviewButtonElement.className = 'btn btn-primary rounded mb-2'; 
    reviewButtonElement.innerHTML = '  Review  '; 
    reviewButtonElement.id = 'showButton'; 
    
    const biographyButtonElement = document.createElement('button');
    const biographyElement = document.createElement('div');
    biographyElement.className = 'smaller'; 
    biographyButtonElement.className = 'btn btn-primary rounded mb-2'; 
    biographyButtonElement.innerHTML = 'Biography'; 
    biographyButtonElement.id = 'biographyButton'; 

    const backButtonElement = document.createElement('button');
    backButtonElement.className = 'btn btn-outline-secondary rounded mb-2 move-down'; 
    backButtonElement.innerHTML = '   Artists   '; 
    backButtonElement.id = 'return'; 
    
    const artistButtonElement = document.createElement('button');
    artistButtonElement.className = 'btn btn-outline-secondary rounded mb-2 move-down'; 
    artistButtonElement.innerHTML = ` ${artist.name} `; 
    artistButtonElement.id = 'artistname'; 
    
    artistElement.innerHTML = `<a href="/index.html#${artist.artistid}">${artist.name}</a>`;
    nameElement.textContent = record.name;
    recordedElement.innerHTML = `<strong>Recorded:</strong> ${record.recorded}`;
    fieldElement.innerHTML = `<strong>Field:</strong> ${record.field}`;
    labelElement.innerHTML = `<strong>Label:</strong> ${record.label}`;
    pressingElement.innerHTML = `<strong>Pressing:</strong> ${pressing}`;
    ratingElement.innerHTML = `<strong>Rating:</strong> ${rating}`;
    discsElement.innerHTML = `<strong>Discs:</strong> ${record.discs}`;
    mediaElement.innerHTML = `<strong>Media:</strong> ${media}`;
    boughtElement.innerHTML = `<strong>Bought:</strong> ${bought}`;
    costElement.innerHTML = `<strong>Cost:</strong> ${record.cost}`;
    reviewElement.innerHTML = `<br/> ${review}`;
    biographyElement.innerHTML = `<br/> ${biography}`;
    
    document.querySelector('#artist').appendChild(artistElement);
    document.querySelector('#album').appendChild(nameElement);
    document.querySelector('#album').appendChild(recordedElement);
    document.querySelector('#album').appendChild(fieldElement);
    document.querySelector('#album').appendChild(labelElement);
    document.querySelector('#album').appendChild(pressingElement);
    document.querySelector('#album').appendChild(ratingElement);
    document.querySelector('#album').appendChild(discsElement);
    document.querySelector('#album').appendChild(mediaElement);
    document.querySelector('#album').appendChild(boughtElement);
    document.querySelector('#album').appendChild(costElement);
    document.querySelector('#album').appendChild(reviewButtonElement);
    document.querySelector('#review').appendChild(reviewElement);
    document.querySelector('#artist').appendChild(biographyButtonElement);
    document.querySelector('#biography').appendChild(biographyElement);
    document.querySelector('#return').appendChild(backButtonElement);
    document.querySelector('#artistname').appendChild(artistButtonElement);
}

const artists = getSavedArtists();

const arr = hashArray(location.hash);

let aid = arr[0];
aid = aid.slice(1);
const rid = arr[1];
const artistId = parseInt(aid);
const recordId = parseInt(rid);

const artist = findArtist(artists, artistId);

const record = findRecord(artist, recordId);

document.querySelector('#return').addEventListener('click', (e) => {
    location.assign('./index.html');
});

document.querySelector('#artistname').addEventListener('click', (e) => {
    location.assign(`./index.html#${aid}`);
});

renderAlbum(artist, record);
