import { Component, Input, ViewChild, AfterViewInit, OnDestroy, OnInit
 } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LogStatus, Username } from '../auth';
import { LoginFormComponent } from "../login-form/login-form.component";
import { RegisterationComponent } from "../registeration/registeration.component";

import { LoginStatus } from "../logStatus.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements AfterViewInit, OnDestroy, OnInit {
  userForm = new FormGroup({username: new FormControl()});
  logStat:LogStatus= new LogStatus(false,'', null);
  @ViewChild(RegisterationComponent) regLogin?:RegisterationComponent;
  @ViewChild(LoginFormComponent) logLogin?:LoginFormComponent;

  constructor(private rs:RestService, private _router:Router, private fb:FormBuilder, private login: LoginStatus) {
    this.userForm = this.fb.group({username: ['', [Validators.required]]});
    // this.logStat = login.log;
  }

  // subscription?: Subscription =this.log.current.subscribe(status => this.logStat = status);



  
  
  ngOnInit() { 

  }

  ngAfterViewInit() {
    if (this.regLogin?.logStat?.status == true) {
      this.logStat = this.regLogin.logStat;
      this.login.changeStatus(this.logStat);
    }
    else if (this.logLogin?.logStat?.status == true) {
      this.logStat = this.logLogin.logStat;
      this.login.changeStatus(this.logStat);
    }
  }
  
  submitUsername(formData: Username) {
    this.logStat.status = true;
    this.logStat.username = formData.username;
    console.log(this.logStat);
    this.login.changeStatus(this.logStat);
    console.log(this.login.log);
    this._router.navigate(['selection']);
  }
  ngOnDestroy() {
    // this.subscription?.unsubscribe();
  }

  
  
}
