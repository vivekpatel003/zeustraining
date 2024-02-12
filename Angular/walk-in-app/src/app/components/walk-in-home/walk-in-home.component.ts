import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-walk-in-home',
  templateUrl: './walk-in-home.component.html',
  styleUrl: './walk-in-home.component.scss'
})
export class WalkInHomeComponent {
  dp:boolean=true;
  data:number[]=[1,2,3,4];
  constructor(private router:Router){}
  expandData()
  {
      this.router.navigate(['/cardDetail']);

    }
}
