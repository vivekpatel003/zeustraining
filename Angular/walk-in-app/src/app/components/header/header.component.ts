import { Component,Input,ElementRef,ViewChild,Renderer2 } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logOut:string="Logout";
  logoutDispaly:boolean=true;
  UserName:string = sessionStorage.getItem('login')
  @ViewChild('Logout') logoutProp:ElementRef;
  @Input() display:boolean;
  constructor(private render:Renderer2,private router:Router){}
  ShowLogOutTab():void{

    if(this.logoutDispaly){
      this.render.setStyle(this.logoutProp.nativeElement,'display','flex');
    }
    else{
      this.render.setStyle(this.logoutProp.nativeElement,'display','none');
    }
    console.log(this.logoutDispaly)
    this.logoutDispaly = !this.logoutDispaly
  }
  LogOut()
  {
      sessionStorage.clear();
      this.router.navigate(["/"]);
  }
}
