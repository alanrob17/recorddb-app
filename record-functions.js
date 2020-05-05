'use strict';

// Read existing artists from localStorage
const getSavedArtists = () => {
    
    let artistsJSON = localStorage.getItem('artistList');

    // if they don't exist
    if (!artistsJSON) {
        saveArtists(artistList);
        console.log('Loaded JSON data!');
    } 

    artistsJSON = localStorage.getItem('artistList');
    const artists = JSON.parse(artistsJSON);

    if (!artists) {
        console.log('Artist JSON is missing!');        
    }

    return artists;
}

// Save the artists to localStorage
const saveArtists = (artistList) => {
    localStorage.setItem('artistList', JSON.stringify(artistList));
}

const getArtist = (artists, artistId) => {
    return artists.find((artist) => {
        return artist.artistid === artistId ? artist : '';
    });
}

const renderArtists = (artists, filters) => {
    
    let filterArtistIdString = location.hash;

    location.hash = '';

    if (filterArtistIdString.length > 1) {
        filterArtistIdString = filterArtistIdString.slice(1);
    }


    let filterArtist = getArtist(artists, parseInt(filterArtistIdString));

    let artistName = '';

    if (filterArtist) {
        artistName = filterArtist.name;

        if (artistName.length > 0) {
            filters.searchText = artistName;
        }
    }

    const filteredArtists = artists.filter((artist) => artist.name.toLowerCase().includes(filters.searchText.toLowerCase()));
    
    document.querySelector('#artists').innerHTML = '';

    const summary = document.createElement('h5');

    if (filteredArtists.length > 1) {
        summary.textContent = `There are ${filteredArtists.length} artist\'s.`;
    } 
    
    document.querySelector('#artists').appendChild(summary);
    
    filteredArtists.forEach((artist) => {
        let artistElement = document.createElement('h3');
        
        // artistElement.textContent = artist.name;
        artistElement.innerHTML = `<a href="/redirect.html#${artist.artistid}">${artist.name}</a>`;        
        document.querySelector('#artists').appendChild(artistElement);
        
        // We have to limit the number of artist's and their records
        if (filters.searchText.length > 2) {
            // List each artist's records
            artist.record.forEach((record, index) => {
                const recordElement = document.createElement('p');
                let mediaType = record.media;
                if (mediaType === 'records') {
                    mediaType = 'R';
                } 
                
                recordElement.innerHTML = `${record.recorded}: <a href="/record.html#${record.artistid}-${record.recordid}">${record.name}</a> - (${mediaType})`;

                document.querySelector('#artists').appendChild(recordElement);
            });            
        }
    });     
}

// Find an artist
const findArtist = (artists, artistId) => {
    return artists.find((artist) => artist.artistid === artistId);
}

// Find an artist's record.
const findRecord = (artist, recordId) => {
    return artist.record.find((record) => record.recordid === recordId);
}

// Clean the artist biography
const cleanBiography = (biography) => {
    const regex = /~/gi;
    const regex2 = /images/gi;
    biography = biography.replace(regex, '"');
    biography = biography.replace(regex2, 'assets/images/');

    return biography;
} 

// Clean the record review
const cleanReview = (review) => {
    const regex = /~/gi;
    review = review.replace(regex, '"');

    return review;
}

// Create a readable rating for a record
const getRecordRating = (rating) => {
    switch (rating) {
        case '****':
          rating = 'Indispensible';
          break;
        case '***':
          rating = 'Slightly flawed';
          break;
        case '**':
           rating = 'Average';
          break;
        case '*':
          rating = 'Mediocre';
    }

    return rating;
}

// Fill out the record media
const getRecordMedia = (media) => {
    switch (record.media) {
        case 'CD':
            media = 'CD-Audio';
            break;
        case 'CD/Blu-ray':
            media = 'CD-Audio & Blu-ray';
            break;
        case 'CD/DVD':
            media = 'CD-Audio & DVD';
            break;
            case 'DVD':
                media = 'DVD';
                break;
        case 'R':
            media = 'Record';
    }

    return media;
} 

// Clean up the record bought date
const getRecordBoughtDate = (bought) => {
    if (record.bought === '' || record.bought === '01-01-1900') {
        bought = 'Unknown';
    } else {
        // this is me playing with dates
        const day = record.bought.substr(0,2);
        const month = record.bought.substr(3,2);
        const year = record.bought.substr(6);
        let newDate = new Date(year + '-' + month + '-' + day).toLocaleString("en-AU", {timeZone: "Australia/Melbourne"});
        bought = newDate.substr(0,10);
        //// This is the original date
        // bought = record.bought;
    }

    return bought;
}

const getRecordPressing = (pressing) => {
    switch (pressing) {
        case 'Am':
            pressing = 'American';
            break;
        case 'Aus':
            pressing = 'Australian';
            break;
        case 'Can':
            pressing = 'Canadian';
            break;
        case 'Eng':
                pressing = 'English';
                break;
        case 'Fra':
            pressing = 'French';
            break;
        case 'Ger':
            pressing = 'German';
            break;
        case 'Hk':
            pressing = 'Hong Kong';
            break;
        case 'Hol':
            pressing = 'Holland';
            break;
        case 'Ita':
            pressing = 'Italian';
            break;
        case 'Jap':
            pressing = 'Japanese';
            break;
        case 'Kor':
            pressing = 'Korean';
            break;
        case 'Swe':
            pressing = 'Swedish';
            break;
        case 'Sws':
            pressing = 'Swiss';
            break;
        default:
            pressing = 'Unknown';
    }

    return pressing;
} 

// for-loop version findArtist
// const findArtist = function (artists, artistId) {
//     for (let x = 0; x < artists.length; x++) {
//         console.log(artists[x].artist[0].artistid);
//         if (artists[x].artist[0].artistid === artistId) {
//             return artists[x];
//             break;
//         }
//     }
// }

// // List each artist and their records
// artists.forEach(function(item, index) {
//     console.log(`${index}: ${item.artist}`);
//     item.records.forEach(function(element, index) {
//         console.log(`\t${element.recorded}: ${element.name}`);
//     });
// });

// // Find an artist and their records
// const findArtist = function (artists, artistName) {
//     return artists.find(function (item, index) {
//         return item.artist.toLowerCase() === artistName.toLowerCase();
//     });
// }

// const artist = findArtist(artists, 'bob dylan');

// // console.log(artist);

// // Find an artist's record.
// const findRecord = function (item, recordName) {
//     return item.records.find(function (element, index) {
//         return element.name.toLowerCase() === recordName.toLowerCase();
//     });
// }

// const record = findRecord(artist, 'Love and Theft');

// console.log(`${record.recorded}: ${record.name}`);

// console.log(record);
