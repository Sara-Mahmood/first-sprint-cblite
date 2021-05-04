import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { LogStatus, LoginData } from '../auth';


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

  onLoginSubmit(formData: LoginData) {
    this.rs.sendLoginData(formData)
    .subscribe((res) => {
      console.log(res);
        if (res.status === true){
          this._router.navigate(['selection']);
        }
        else {
          this._router.navigate(['/']);
        }
      },
      (error) => {
        console.log('Could not login')
        console.log(error);
      }
    )

    // this.rs.readLogStatus()
    // .subscribe
    // (
    //   (response) => 
    //   {
    //     if (response.status == true){
    //       this._router.navigate(['selection']);
    //     }
    //   },
    //   (error)=>
    //   {
    //     console.log("Could Not Log In!")
    //   }
    // )
  }

}
