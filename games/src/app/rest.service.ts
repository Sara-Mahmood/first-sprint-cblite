import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogStatus, LoginData, RegisterData } from './auth';

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
  sendRegData(regObj: RegisterData) {
    const {Username,Email, Password} = regObj;
    const formData = new FormData();

    formData.append("username", Username);
    formData.append("email", Email);
    formData.append("password", Password);
    
    return this.http.post<LogStatus>(this.server + "register", formData);
  }
}

