import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  logStatus:boolean = false;

  loginFormModel = this.fb.group({
    email: [''],
    Password: ['']
  });
  constructor(private rs:RestService, private _router:Router, private fb:FormBuilder) { }

  ngOnInit() {
    
  }

  onLoginSubmit() {
    this.rs.readLogStatus()
    .subscribe
    (
      (response) => 
      {
        if (response.status == true){
          this._router.navigate(['selection']);
        }
      },
      (error)=>
      {
        console.log("Could Not Log In!")
      }
    )
  }
}
