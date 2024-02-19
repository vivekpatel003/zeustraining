import { Component,AfterViewInit, ElementRef,ViewChild,Renderer2 } from '@angular/core';
import { SharedServiceService } from "../../services/shared-service.service";
import { Router } from "@angular/router";
import {EducationPageDataService} from '../../services/education-page-data.service';
import { Console } from 'console';

@Component({
  selector: 'app-personal-info-2',
  templateUrl: './personal-info-2.component.html',
  styleUrl: './personal-info-2.component.scss'
})
export class PersonalInfo2Component {
  createButton:boolean=false;
  educationDisplay:boolean=true;
  professionalDisplay:boolean=true;

  backButton:string = 'education';
  educationData={
    show:this.SharedServiceService.educationData.show,
    percentageVal:this.SharedServiceService.educationData.percentageVal,
    passingYear:this.SharedServiceService.educationData.passingYear,
    qualification:this.SharedServiceService.educationData.qualification,
    stream:this.SharedServiceService.educationData.stream,
    college:this.SharedServiceService.educationData.college,
    other:this.SharedServiceService.educationData.other,
    location:this.SharedServiceService.educationData.location
  };

 
  experiencedData={
    yearOfExperience:this.SharedServiceService.experiencedData.yearOfExperience,
    cCTC:this.SharedServiceService.experiencedData.cCTC,
    eCTC:this.SharedServiceService.experiencedData.eCTC,
    techExp:this.SharedServiceService.experiencedData.techExp,
    otherExp:this.SharedServiceService.experiencedData.otherExp,
    techFam:this.SharedServiceService.experiencedData.techFam,
    otherFam:this.SharedServiceService.experiencedData.otherFam,
    onNotice:this.SharedServiceService.experiencedData.onNotice,
    endDate:this.SharedServiceService.experiencedData.endDate,
    duration:this.SharedServiceService.experiencedData.duration,
    appeared:this.SharedServiceService.experiencedData.appeared,
    roleApplied:this.SharedServiceService.experiencedData.roleApplied
  }

  passingYears:number[]=[2024,2025,2026,2027];
  subjectListExp:{name:string,selected:boolean}[]=[
  {name:"Javascript",selected:false}
  ,{name:"Angular JS",selected:false}
  ,{name:"React",selected:false}
  ,{name:"Node JS",selected:false}
  ,{name:"Others",selected:false}
];
subjectListFam:{name:string,selected:boolean}[]=[
  {name:"Javascript",selected:false}
  ,{name:"Angular JS",selected:false}
  ,{name:"React",selected:false}
  ,{name:"Node JS",selected:false}
  ,{name:"Others",selected:false}
];
  QualificationList:any={
    college:{
      cId:'',
      collegeName:''
    },
    stream:{
      sId:'',
      streamName:''
    },
    qualification:{
      qId:'',
      qualificationName:''
    }
  }

    
    durationList:string[]=[
      "1 Months",
      "2 Months",
      "3 Months",
      "4 Months",
      "5 Months"
    ];
  jobs:{
      name:string,
      selected:boolean
    }[]=[
      { name:"Instructional Designer", selected:false},
      { name:"Software Engineer", selected:false},
      { name:"Software Quality Engineer", selected:false} 
    ]

    @ViewChild('dropDown') dropDown :ElementRef;
    @ViewChild('educationTab') educationTab:ElementRef;
    @ViewChild('modeAppTab') modeTab:ElementRef;
    @ViewChild('freTab') freTab:ElementRef;
    @ViewChild('proffDropDown') proffDropDown:ElementRef;
    
    


   constructor(private SharedServiceService:SharedServiceService,private router:Router,private render:Renderer2,private edu:EducationPageDataService){
          this.edu.getdata().subscribe(data=>{
            this.QualificationList = data;
            console.log(this.QualificationList);
          });
          

  }
  navigateFunction():void{
    this.router.navigate(['/createAccount']);
  }
  showeduFunc()
  {
    console.log(this.educationDisplay);
    if(this.educationDisplay)
    {
      this.render.setStyle(this.dropDown.nativeElement,'transform','rotate(0deg)');
      this.render.setStyle(this.educationTab.nativeElement,'display','none');
    }
    else{
      this.render.setStyle(this.dropDown.nativeElement,'transform','rotate(180deg)');
      this.render.setStyle(this.educationTab.nativeElement,'display','block');
    }
    this.educationDisplay = !this.educationDisplay;
  }
  showproffFunc()
  {
    console.log(this.professionalDisplay);
    if(this.professionalDisplay)
    {
      this.render.setStyle(this.proffDropDown.nativeElement,'transform','rotate(0deg)');
      this.render.setStyle(this.modeTab.nativeElement,'display','none');
      this.render.setStyle(this.freTab.nativeElement,'display','none');
      this.render.setStyle(this.modeTab.nativeElement,'transition-property','display');
      this.render.setStyle(this.modeTab.nativeElement,'transition-duration','2s');
    }
    else{
      this.render.setStyle(this.proffDropDown.nativeElement,'transform','rotate(180deg)');
      this.render.setStyle(this.dropDown.nativeElement,'background-color','none');
      this.render.setStyle(this.modeTab.nativeElement,'display','block');
      this.render.setStyle(this.freTab.nativeElement,'display','block');
    }
    this.professionalDisplay = !this.professionalDisplay;
  }
 
  addData()
  {
    console.log("Value is:",this.SharedServiceService.personalData.Email)
    console.log("fresher:",this.experiencedData)
    this.SharedServiceService.updateEducationData(this.educationData);
    console.log(this.SharedServiceService.getEducationData());
    this.experiencedData.techFam = this.selectedFamData
    this.experiencedData.techExp = this.selectedExpData
    this.SharedServiceService.updateExperiencedData(this.experiencedData);
    console.log(this.SharedServiceService.getExperiencedData());
    // this.router.navigate(['/review']);
  }
  get selectedExpData()
  {
    return this.subjectListExp.filter((c)=>c.selected);
  }
  get selectedFamData()
  {
    return this.subjectListFam.filter((c)=>c.selected);
  }

}