import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RestService } from './rest.service';
import { LoginPageComponent } from "./login-page/login-page.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { RegisterationComponent } from "./registeration/registeration.component";
import { LogStatus } from "./auth";
import { LoginStatus } from './logStatus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginStatus]
})
export class AppComponent implements AfterViewInit{
  title = 'games';
  @ViewChild(LoginPageComponent) userLogin: LogStatus|null = null;
  @ViewChild(RegisterationComponent) regLogin: LogStatus|null = null;
  @ViewChild(LoginFormComponent) logLogin: LogStatus|null = null;

  logStat:LogStatus|null = null;


  constructor(private rs : RestService) {
  }

  ngAfterViewInit() {
    if (this.userLogin?.status) {
      this.logStat = this.userLogin;
    }
    else if (this.regLogin?.status) {
      this.logStat = this.regLogin;
    }
    else if (this.logLogin?.status) {
      this.logStat = this.logLogin;
    }
    console.log(this.logStat);
  }
}
