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
    const recordedElement = document.createElement('div');
    const labelElement = document.createElement('div');
    const ratingElement = document.createElement('div');
    const mediaElement = document.createElement('div');
    const costElement = document.createElement('div');
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

    recordedElement.innerHTML = `<div class="justify-content-start row mt-3"><div class="col-sm-4"><p><strong>Recorded:</strong> ${record.recorded}</p></div><div class="col-sm-4"><p><strong>Field:</strong> ${record.field}</p></div><div class="col-sm-4"></div></div>`;
    labelElement.innerHTML = `<div class="justify-content-start row mt-3"><div class="col-sm-4"><p><strong>Label:</strong> ${record.label}</p></div><div class="col-sm-4"><p><strong>Pressing:</strong> ${pressing}</p></div><div class="col-sm-4"></div></div>`;
    ratingElement.innerHTML = `<div class="justify-content-start row mt-3"><div class="col-sm-4"><p><strong>Rating:</strong> ${rating}</p></div><div class="col-sm-4"><p><strong>Discs:</strong> ${record.discs}</p></div><div class="col-sm-4"></div></div>`;
    mediaElement.innerHTML = `<div class="justify-content-start row mt-3"><div class="col-sm-4"><p><strong>Media:</strong> ${media}</p></div><div class="col-sm-4"><p><strong>Bought:</strong> ${bought}</p></div><div class="col-sm-4"></div></div>`;
    costElement.innerHTML = `<div class="justify-content-start row mt-3"><div class="col-sm-4"><p><strong>Cost:</strong> ${record.cost}</p></div><div class="col-sm-4"><p>&nbsp;</p></div><div class="col-sm-4"></div></div>`;

    reviewElement.innerHTML = `<br/> ${review}`;
    biographyElement.innerHTML = `<br/> ${biography}`;
    
    document.querySelector('#artist').appendChild(artistElement);
    document.querySelector('#album').appendChild(nameElement);
    document.querySelector('#album').appendChild(recordedElement);
    document.querySelector('#album').appendChild(labelElement);
    document.querySelector('#album').appendChild(ratingElement);
    document.querySelector('#album').appendChild(mediaElement);
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
