import { Component } from '@angular/core';

@Component({
  selector: 'app-experienced',
  templateUrl: './experienced.component.html',
  styleUrl: './experienced.component.scss'
})
export class ExperiencedComponent {
  jobs:{
    name:string,
    selected:boolean
  }[]=[
    { name:"Instructional Designer", selected:false},
    { name:"Software Engineer", selected:false},
    { name:"Software Quality Engineer", selected:false} 
  ]

}
