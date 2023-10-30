import { Injectable } from "@angular/core";
import { Observable,of } from "rxjs";
import { tap,delay } from "rxjs";
import { HttpBackend} from "@angular/common/http";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})

//mukul
export class AuthService {
    

    /* private  apiUrl ='http://localhost:3000';
    constructor( private http:HttpClient){}


    register(user : {username : string,password : string}) : Observable<any>{
        return this.http.post(`${this.apiUrl}/login`,Credential)
        .pipe(
   
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


    } */


 
    private loginurl = 'http://localhost:8080/login'

    constructor(private http: HttpClient) { }


    loggedIn(username: string, password: string): Observable<string> {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
        };
      
        const body = { username: username, password: password};
      
        return this.http.post<string>(this.loginurl, body, httpOptions);
      }

    logedOut() {
        
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('StoreId');
        localStorage.removeItem('FullName');


    }
}