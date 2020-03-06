export class Geo {
    lat: string;
    lng: string;
}

export class Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;

    constructor() {
       this.geo = new Geo;
    }
}

export class Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;

    constructor() {
        this.name = "Another user";
        this.username = "";
        this.email = "";
        this.address = new Address;
        this.company = new Company;
    }
}