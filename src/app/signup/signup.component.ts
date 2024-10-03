import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/core/servises/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
constructor(private _authService:AuthService ){

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
      Validators.minLength(5),
    ]),
    rePassword: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(12),
    ]),
  });

register(form:FormGroup){
  if (form.valid) {
  this._authService.register(form.value).subscribe({
    next:(res:any)=>{console.log(res)},
    error :(err:any)=>{console.log(err)
    }

  })
  }
  console.log('hiiiiii',form);

}
}
