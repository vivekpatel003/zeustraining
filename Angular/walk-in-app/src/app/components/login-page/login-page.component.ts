import { Component,ElementRef,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {AuthServiceService} from '../../services/auth-service.service';
import {SharedServiceService} from '../../services/shared-service.service';
import { Console } from 'console';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  
  showPassword:boolean=false;
  
  login_data={
    email:this.shared.loginData.email,
    password:this.shared.loginData.password,
    remember:this.shared.loginData.remember
  }
   constructor(private router:Router,private auth:AuthServiceService,private shared:SharedServiceService){}
    togglePasswordVisibility()
    {
      this.showPassword=!this.showPassword;
    }
    showData():void{
      this.auth.authentication({
        "email": this.login_data.email,
        "password": this.login_data.password
      }).subscribe(present=>{
        if(present=="NotExist")
        {
          alert("Wrong Credentials");
        }
        else{
          
          if(sessionStorage.getItem('token')!='')
          {
            sessionStorage.clear();
          }
          sessionStorage.setItem('login',this.login_data.email);
          sessionStorage.setItem('token',present);
          this.router.navigate(["/dashBoard"]);
        }
      });
    }
}
