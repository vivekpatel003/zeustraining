import { Component,ElementRef,Renderer2,ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.scss'
})
export class CardDetailsComponent {
    dp:boolean=true;
    termDisplay:boolean=false;


    @ViewChild('preReqTab') preReqTab:ElementRef;
    @ViewChild('dropDown') dropDown :ElementRef;


    form_data:any={
        timing:'',
        preferences:[],
        resume:''
    };
    checkBoxes:{
      name:string,
      selected:boolean
    }[]=[
      {name:"Instructional Designer",selected:false},
      {name:"Software Engineer",selected:false},
      {name:"Software Quality Engineer",selected:false}
    ];
    @ViewChild('mainTab') top:ElementRef;
    constructor(private router:Router,private render:Renderer2){}

    showtermFunc()
    {
      console.log(this.termDisplay);
      if(this.termDisplay)
      {
        this.render.setStyle(this.dropDown.nativeElement,'transform','rotate(0deg)');
        this.render.setStyle(this.preReqTab.nativeElement,'display','none');
      }
      else{
        this.render.setStyle(this.dropDown.nativeElement,'transform','rotate(180deg)');
        this.render.setStyle(this.preReqTab.nativeElement,'display','block');
      }
      this.termDisplay = !this.termDisplay;
    }
    
    scrollTop()
    {   
        console.log(this.top.nativeElement);
    }
    getData()
    {
      this.form_data.preferences = this.selectedData;
      console.log(this.form_data)
      this.router.navigate(['/hallTicket'])
    }
    get selectedData()
    {
       return this.checkBoxes.filter((c)=>
          c.selected  
        );
    }
}
