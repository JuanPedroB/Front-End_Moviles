import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {private readonly apiUrl = 'http://localhost:8080/login';
public accessGranted = false;
public accessToken!: string;
public refreshToken!: string;
constructor(private http: HttpClient) {}
authenticate(username: string, password: string) {
  let options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    }),
    params: new HttpParams()
      .set('username', username)
      .set('password', password),
    withCredentials: true,
  };
  this.http.post<ResponseToken>(this.apiUrl, null, options) 
  .subscribe(
    (respond)=>{
      console.log("asociando un token");
      this.accessToken =respond.access_token;
      this.refreshToken=respond.refresh_token;
      this.accessGranted=true;
     // console.log(this.accessToken)
    });
}
}
interface ResponseToken{
access_token:string;
refresh_token:string;
}

