import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  constructor(private rs:RestService, private _router:Router, private fb:FormBuilder) { }

  registerFormModel = this.fb.group({
    username: ['',[Validators.required]],
    Email: ['', [Validators.required, Validators.email]],
    Passwords: this.fb.group({
        Password: ['', [Validators.required, Validators.minLength(4)]],
        ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })

  });


  ngOnInit(): void {
  }

  comparePasswords(fb: FormGroup){
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
        if (confirmPswrdCtrl != null && (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors)) {
            let pswd = fb.get('Password')
            if (pswd != null && (pswd.value != confirmPswrdCtrl.value))
                confirmPswrdCtrl.setErrors({ passwordMismatch: true });
            else
                confirmPswrdCtrl.setErrors(null);
        }
  }

  onRegisterSubmit(){

  }

}
