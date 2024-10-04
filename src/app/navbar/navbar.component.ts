import { Component } from '@angular/core';
import { AuthService } from 'src/core/servises/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isLoggedIn: boolean = false;
  constructor(private _authServise: AuthService) {
this._authServise.userData.subscribe((res)=>{

  if (res!=null) {
this.isLoggedIn=true;
  }else{
    this.isLoggedIn=false;

  }
})
  }
}
