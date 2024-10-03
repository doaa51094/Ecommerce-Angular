import { Component } from '@angular/core';
import { AuthService } from 'src/core/servises/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLoading:boolean=false;
  isNotValidForm:boolean=false;
  errorMsg:string=''
constructor(private _authService:AuthService ,private _router:Router){

}
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  },
  );

login(form:FormGroup){
  if (form.valid) {
  this.isLoading=true;
  this._authService.login(form.value).subscribe({
    next:(res:any)=>{
      this.isLoading=false;
      this._router.navigate(['/home'])
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
