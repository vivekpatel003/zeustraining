import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {
   @Input() id:boolean;
   @Input() back:string;
   constructor(private router:Router){}
   getData()
   {
     console.log(this.id);
   }
   cancelProcess(){
      this.router.navigate(['/']);
   }
}
