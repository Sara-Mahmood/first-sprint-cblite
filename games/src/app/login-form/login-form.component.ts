import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { LogStatus, LoginData } from '../auth';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginFormModel = new FormGroup ({ email: new FormControl(), password: new FormControl()});


  constructor(private rs:RestService, private _router:Router, private fb:FormBuilder) {
    this.loginFormModel = this.fb.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }

  

  ngOnInit(): void {
  }

  onLoginSubmit(formData: LoginData) {
    this.rs.sendLoginData(formData)
    .subscribe((res:LogStatus) => {
      console.log(res);
        if (res.status === true){
          this._router.navigate(['selection']);
        }
        else {
          this._router.navigate(['signin']);
        }
      },
      (error:LogStatus) => {
        console.log('Could not login')
        console.log(error);
      }
    )
  }

}
