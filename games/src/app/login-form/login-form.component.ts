import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private rs:RestService, private _router:Router, private fb:FormBuilder) { }

  loginFormModel = this.fb.group({
    Email: ['', Validators.required],
    Password: ['', Validators.required]
  });

  ngOnInit(): void {
  }

  onLoginSubmit() {
    // this.rs.sendLoginData(this.loginFormModel.get('Email').value, this.loginFormModel.get('Password').value)
    // .subscribe();

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
