import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogStatus, LoginData } from './auth';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { } 

  server:string = 'http://localhost:5000/api/';

  sendLoginData(loginObj:LoginData) {
    const {Email, Password} = loginObj;
    const formData = new FormData();

    formData.append("email", Email);
    formData.append("password", Password);

    return this.http.post<LogStatus>(this.server + "login", formData);
  }
  sendRegData(username:string,email:string, password:string) {
    return this.http.post(this.server + "register", {email:email, password:password});
  }
}

