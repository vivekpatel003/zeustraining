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
          "srno": 0,
          "email": this.login_data.email,
          "password": this.login_data.password,
          "isAdmin": true,
          "dtCreated": "2024-02-16T07:19:28.912Z",
          "dtModified": "2024-02-16T07:19:28.912Z"
      }).subscribe(present=>{
        if(present == false){
          alert("Wrong Credentials!");
        }
        else{
          console.log(this.login_data)
          this.router.navigate(['/dashBoard']);
        }
      });
    }
}
