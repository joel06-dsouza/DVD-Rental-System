import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor() {


    }


    loggedIn() {
        return !!localStorage.getItem('jwtToken');

    }

    logedOut() {

        localStorage.removeItem('jwtToken');
        localStorage.removeItem('StoreId');
        localStorage.removeItem('FullName');


    }


}