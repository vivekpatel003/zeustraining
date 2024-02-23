import { Component, ElementRef, Renderer2, ViewChild,Input,OnInit } from '@angular/core';
import { SpecJobPageService } from '../../services/spec-job-page.service';
import { Console } from 'console';
@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss'
})
export class JobDetailsComponent implements OnInit {
  roledropDown:boolean=false;
  jobRoleData:any;
  @Input() id:number;
  requirement:string[];
  roleDiscription:string[];
  @Input() JobName:string;

  @ViewChild('dropDown') dropDown:ElementRef;
  @ViewChild('preReqTab') preReqTab:ElementRef;
  
  constructor(private render:Renderer2,private spec:SpecJobPageService){
    
  }
  ngOnInit(): void {
    this.spec.getJobDetails(
      {
        "name":'Software Engineer'
      }
      ).subscribe(data=>{
        this.jobRoleData = data;
        this.jobRoleData = JSON.parse(this.jobRoleData);
        // this.requirement = this.jobRoleData.requirement.split('-').slice(1);
        // this.roleDiscription = this.jobRoleData.roleDescription.split('-').slice(1);
        console.log("this is jobdata",this.jobRoleData)
      });
      console.log("the jobRole: ",this.JobName)
    throw new Error('Method not implemented.');
  }
  
  showeduFunc()
  {
    // console.log(this.getroles())
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
