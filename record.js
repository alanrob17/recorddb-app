'use strict';

class Record {
    constructor(artistid, recordid, name, field, recorded, label, pressing, rating, discs, media, bought, cost, covername, review) {
        this.artistid = artistid; 
        this.recordid = recordid; 
        this.name = name;
        this.field = field;
        this.recorded = recorded;
        this.label = label;
        this.pressing = pressing;
        this.rating = rating;
        this.discs = discs;
        this.media = media;
        this.bought = bought;
        this.cost = cost;
        this.covername = covername;
        this.review = review;
    }
}

    // const album = new Record(
    //     this.artistid = parseInt(aid),
    //     this.recordid = 0,
    //     this.name = form.elements.name.value,
    //     this.field = form.elements.field.value,
    //     this.recorded = parseInt(form.elements.recorded.value),
    //     this.label = form.elements.label.value,
    //     this.pressing = form.elements.pressing.value,
    //     this.rating = form.elements.rating.value,
    //     this.discs = parseInt(form.elements.discs.value),
    //     this.media = form.elements.media.value,
    //     this.bought = form.elements.bought.value,
    //     this.cost = parseFloat(form.elements.cost.value),
    //     this.covername = form.elements.covername.value,
    //     this.review = form.elements.review.value
    // );
