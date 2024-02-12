import { Component,AfterViewInit, ElementRef,ViewChild,Renderer2 } from '@angular/core';
import { SharedServiceService } from "../../services/shared-service.service";
import { Router } from "@angular/router";

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
    show:'',
    percentageVal:'',
    passingYear:'',
    qualification:'',
    stream:'',
    college:'',
    other:'',
    location:''
  };

 
  experiencedData={
    yearOfExperience:'',
    cCTC:'',
    eCTC:'',
    techExp:[],
    otherExp:'',
    techFam:[],
    otherFam:'',
    onNotice:'',
    endDate:'',
    duration:'',
    appeared:'',
    roleApplied:''
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
  QualificationList:string[]= [
    "Bachelor's Degree in Computer Science",
    "Master's Degree in Business Administration",
    "Certified Project Management Professional (PMP)",
    "Fluent in English, Spanish, and French",
    "Certified Scrum Master (CSM)"
  ];
  StreamList:string[]=[
    "Computer Science",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Biotechnology"
  ];
  collegesList:string[]=[
    
      "Harvard University",
      "Massachusetts Institute of Technology (MIT)",
      "Stanford University",
      "University of Cambridge",
      "ETH Zurich (Swiss Federal Institute of Technology)"
    ];
    
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
    
    


  constructor(private SharedServiceService:SharedServiceService,private router:Router,private render:Renderer2){}
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
    console.log("Value is:",this.educationData.percentageVal)
    console.log("fresher:",this.experiencedData)
    this.SharedServiceService.updateEducationData(this.educationData);
    console.log(this.SharedServiceService.getEducationData());
    this.experiencedData.techFam = this.selectedFamData
    this.experiencedData.techExp = this.selectedExpData
    this.SharedServiceService.updateExperiencedData(this.experiencedData);
    console.log(this.SharedServiceService.getExperiencedData());
    this.router.navigate(['/review']);
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