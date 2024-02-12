import { AfterViewInit, Component,ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-fresher',
  templateUrl: './fresher.component.html',
  styleUrl: './fresher.component.scss'
})
export class FresherComponent {
  @ViewChild('otherSubject') subject:ElementRef;

 
  jobs:{
    name:string,
    selected:boolean
  }[]=[
    { name:"Instructional Designer", selected:false},
    { name:"Software Engineer", selected:false},
    { name:"Software Quality Engineer", selected:false} 
  ]



}
