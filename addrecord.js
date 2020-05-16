'use strict';

let aid = 0;

const renderArtistDropDown = (artists) => {
    artists.forEach(artist => {
        // build up artist list here
        const artistElement = document.createElement('option');

        artistElement.value = artist.artistid; 
        artistElement.innerHTML = ` ${artist.name} `; 
        document.querySelector('#filter-by').appendChild(artistElement);
    });
}

const renderRecord = (artists, artistid) => {
    document.querySelector('#header').innerHTML = '';
    if (artistid > 0) {
        const a = findArtist(artists, artistid);

        const artist = new Artist(a.artistid, a.firstname, a.lastname, a.name, a.biography);
        aid = artist.artistid;
        const artistElement = document.createElement('span');
        artistElement.textContent = artist.fullName; 
        artistElement.id = artist.artistid;
        artistElement.textContent = artist.fullName; 
        
        document.querySelector('#header').appendChild(artistElement);
    }
}

document.querySelector('#filter-by').addEventListener('change', (e) => {
    const artistid = parseInt(e.target.value);
    renderRecord(artists, artistid);
});

document.querySelector('#submit').addEventListener('click', (e) => {
    e.preventDefault();
    var form = document.querySelector("form");
    
    // var artistSelection = document.querySelector("#header").innerHTML;

    let review = form.elements.review.value;

    review = review.replace('\n', '');

    const record = {
        artistid: parseInt(aid),
        recordid: 0,
        name: form.elements.name.value,
        field: form.elements.field.value,
        recorded: parseInt(form.elements.recorded.value),
        label: form.elements.label.value,
        pressing: form.elements.pressing.value,
        rating: form.elements.rating.value,
        discs: parseInt(form.elements.discs.value),
        media: form.elements.media.value,
        bought: form.elements.bought.value,
        cost: parseFloat(form.elements.cost.value),
        covername: form.elements.covername.value,
        review: review
    }

    localStorage.setItem('record', JSON.stringify(record));

    location.assign('./recordtest.html');
});

const selectElement = (id, valueToSelect) => {    
    let element = document.getElementById(id);
    element.value = valueToSelect;
}

const artists = getSavedArtists();

renderArtistDropDown(artists);

if (location.hash === '#error') {
    const item = localStorage.getItem('record');

    const record = JSON.parse(item);

    const artistid = record.artistid.toString();

    selectElement('filter-by', artistid); 

    const a = findArtist(artists, record.artistid);
    const artist = {
        artistid: a.artistid,
        firstname: a.firstname,
        lastname: a.lastname,
        name: a.name,
        biography: a.biography
    }

    aid = artist.artistid;

    const nameElement = document.createElement('span');
    nameElement.textContent = artist.name; 
    nameElement.id = artist.artistid;

    document.querySelector('#header').appendChild(nameElement);

    var form = document.querySelector("form");
    form.name.value = record.name;
    form.field.value = record.field;
    form.recorded.value = record.recorded;
    form.label.value = record.label;
    form.pressing.value = record.pressing;
    form.rating.value = record.rating;
    form.discs.value = record.discs;
    form.media.value = record.media;
    form.bought.value = record.bought;
    form.cost.value = record.cost;
    form.covername.value = record.covername;
    form.review.value = record.review;
}