import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor() {
    }

    loggedIn() {
        return !!localStorage.getItem('jwtToken') || !!localStorage.getItem('ajwtToken')

    }

    logedOut() {

        localStorage.removeItem('jwtToken');
        localStorage.removeItem('StoreId');
        localStorage.removeItem('FullName');
        localStorage.removeItem('ajwtToken');
        localStorage.removeItem('aName');
        localStorage.removeItem('aId');



    }


}