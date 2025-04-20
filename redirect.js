'use strict';

let artistId = location.hash;
artistId = artistId.slice(1);
location.assign('./index.html#' + artistId);

