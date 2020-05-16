'use strict';

document.querySelector('#return').addEventListener('click', (e) => {
    location.assign('./addrecord.html#error');
});

const renderRecord = (artist, record, errorMessage) => {
    if (errorMessage.substring(0, 3) === '<p>') {
        const errorElement = document.createElement('div');
        errorElement.className = 'text-danger';
        errorElement.innerHTML = errorMessage;
        const returnButtonElement = document.createElement('button');
        returnButtonElement.className = 'btn btn-primary rounded mb-2'; 
        returnButtonElement.innerHTML = '  Fix record  '; 
        returnButtonElement.id = 'repair'; 
        document.querySelector('#error').appendChild(errorElement);
        document.querySelector('#return').appendChild(returnButtonElement);
    } else {
        console.log(artist);
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

        localStorage.removeItem('record');
    }
}

const validate = (record) => {
    let errorMessage = ''
    if (!record.name.length > 2) {
        errorMessage = '<p>PROBLEMS:</p><p>Album name is not valid</p>';
    } 

    if (record.recorded < 1900 || record.recorded > 2020) {
        errorMessage += '<p>Album recorded is not a valid year.</p>';
    }

    if (!record.label.length > 2) {
        errorMessage += '<p>Album label is not valid.</p>';
    }

    if (record.pressing === '0') {
        errorMessage += '<p>Album pressing is not valid.</p>';
    }

    if (record.rating === '0') {
        errorMessage += '<p>Album rating is not valid.</p>';
    }

    if (record.discs === '0') {
        errorMessage += '<p>Album number of discs is not valid.</p>';
    }

    if (record.media === '0') {
        errorMessage += '<p>Album media is not valid.</p>';
    }

    // TODO: you have to add date routines in here
    if (record.bought.length === 0) {
        console.log(typeof record.bought);
        errorMessage += '<p>Album bought is not valid.</p>';
    }

    if (record.cost === null) {
        errorMessage += '<p>Album cost is not valid.</p>';
    }

    return errorMessage;
}

document.querySelector('#return').addEventListener('click', (e) => {
    location.assign('./index.html');
});

document.querySelector('#artistname').addEventListener('click', (e) => {
    location.assign(`./index.html#${artist.artistid}`);
});

const getRecord = () => {
    let record = localStorage.getItem('record');

    return JSON.parse(record);
}

const record = getRecord();

const errorMessage = validate(record);

const artists = getSavedArtists();

const artist = findArtist(artists, record.artistid);

renderRecord(artist, record, errorMessage);