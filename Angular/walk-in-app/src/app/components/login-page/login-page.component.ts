import { Component,ElementRef,ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  
  showPassword:boolean=false;
  login_data={
    email:'',
    password:'',
    remember:false
  }
   constructor(private router:Router){}
    togglePasswordVisibility()
    {
      this.showPassword=!this.showPassword;
    }
    showData():void{
      console.log(this.login_data)
      this.router.navigate(['/dashBoard']);
    }
}
