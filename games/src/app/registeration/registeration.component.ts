import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RegisterData, LogStatus } from '../auth';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  registerFormModel = new FormGroup({username: new FormControl(),Email: new FormControl(),
                                    Password: new FormControl(), ConfirmPassword: new FormControl()});

  
  logStat?:LogStatus;

  constructor(private rs:RestService, private _router:Router, private fb:FormBuilder) { 
    this.registerFormModel = this.fb.group({
      username: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
      Passwords: this.fb.group({
          Password: ['', [Validators.required, Validators.minLength(4)]],
          ConfirmPassword: ['', [Validators.required]]
      }, { validator: this.comparePasswords })
  
    });
  }

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

  onRegisterSubmit(formData: RegisterData){
    this.rs.sendRegData(formData)
    .subscribe((res:LogStatus) => {
      console.log(res);
      this.logStat = res;
        if (res.status === true){
          this._router.navigate(['selection']);
        }
        else {
          this._router.navigate(['signin']);
        }
      },
      (error:LogStatus) => {
        console.log('Unable to register')
        console.log(error);
        this._router.navigate(['signin']);
      }
    )
  }

}
