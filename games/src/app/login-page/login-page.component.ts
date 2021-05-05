import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  logStatus:boolean = false;
  userForm = new FormGroup({username: new FormControl()})


  constructor(private rs:RestService, private _router:Router, private fb:FormBuilder) {
    this.userForm = this.fb.group({username: ''});
  }
  

  ngOnInit() {
    
  }
  
}
