import { Injectable } from "@angular/core";
import { Observable,of } from "rxjs";
import { tap,delay } from "rxjs";
import { HttpBackend,HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})

export class AuthService{

    private  apiUrl ='http://localhost:3000';
    constructor( private http:HttpClient){}

    register(user : {username : string,password : string}) : Observable<any>{
        return this.http.post(`${this.apiUrl}/login`,Credential)
        .pipe(/* mycode to display token on vs console */
   
   tap(response =>{
      if(response.token){
         console.log('JWT Token',response.token);
      }
   })
   );
    }

                            
                saveToken(token : string): void {
                    localStorage.setItem('jwtToken',token);
                }

                getToken():string | null {
                    return localStorage.getItem('jwtToken');
                }

                isLoggedIn(): boolean {
                    return !!this.getToken();
                }

                logout() : void {
                    localStorage.removeItem('jwtToken');
                }


    loggedIn(){
        return !!localStorage.getItem('StoreId');

    }

    
}