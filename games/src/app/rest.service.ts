import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {LogStatus } from './auth'

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { } 

  gameUrl:string = 'http://localhost:4200';
  
  readLogStatus() {
    return this.http.get<LogStatus>(this.gameUrl);
  }
}
