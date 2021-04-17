import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {LogStatus } from './auth'

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { } 

  statUrl:string = 'http://localhost:4200/login';
  sendloginUrl:string = 'http://localhost:4200/login';
  sendRegUrl:string = 'http://localhost:4200/register';

  readLogStatus() {
    return this.http.get<LogStatus>(this.statUrl);
  }
  sendLoginData(email:string, password:string) {
    return this.http.post(this.sendloginUrl, {email:email, password:password});
  }
  sendRegData(username:string,email:string, password:string) {
    return this.http.post(this.sendloginUrl, {email:email, password:password});
  }
}
