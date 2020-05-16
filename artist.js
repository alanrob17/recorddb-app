class Artist {
    constructor(artistid, firstname, lastname, name, biography) {
        this.artistid = artistid; 
        this.firstname = firstname;
        this.lastname = lastname;
        this.name = name;
        this.biography = biography;
    }
    
    get fullName() {
        return `${this.firstname} ${this.lastname}`;
    }
}