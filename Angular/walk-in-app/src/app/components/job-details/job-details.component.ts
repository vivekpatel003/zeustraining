import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss'
})
export class JobDetailsComponent {
  roledropDown:boolean=false;

  @ViewChild('dropDown') dropDown:ElementRef;
  @ViewChild('preReqTab') preReqTab:ElementRef;
  
  constructor(private render:Renderer2){}

  showeduFunc()
  {
    console.log(this.roledropDown);
    if(this.roledropDown)
    {
      this.render.setStyle(this.dropDown.nativeElement,'transform','rotate(0deg)');
      this.render.setStyle(this.preReqTab.nativeElement,'display','none');
    }
    else{
      this.render.setStyle(this.dropDown.nativeElement,'transform','rotate(180deg)');
      this.render.setStyle(this.preReqTab.nativeElement,'display','flex');
    }
    this.roledropDown = !this.roledropDown;
  }
}
