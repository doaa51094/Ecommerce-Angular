import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/core/servises/auth.service';
import { passwordMatchValidator } from './../validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  isLoading:boolean=false;
  isNotValidForm:boolean=false;
  errorMsg:string=''
constructor(private _authService:AuthService ,private _router:Router){

}
  RegisterForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(15),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    rePassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(12),
    ]),
  },
  { validators: passwordMatchValidator }
  );

register(form:FormGroup){
  if (form.valid) {
  this.isLoading=true;
  this._authService.register(form.value).subscribe({
    next:(res:any)=>{
      this.isLoading=false;
      this._router.navigate(['/login'])
    },
    error :(err:any)=>{
      this.errorMsg=err.error.message;
      this.isLoading=false;
    }

  })
  }else{
    this.isNotValidForm=true;

  }

}
}
