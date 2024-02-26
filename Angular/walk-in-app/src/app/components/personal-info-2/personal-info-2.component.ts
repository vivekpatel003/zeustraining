import { Component,AfterViewInit, ElementRef,ViewChild,Renderer2,OnInit } from '@angular/core';
import { SharedServiceService } from "../../services/shared-service.service";
import { Router } from "@angular/router";
import {EducationPageDataService} from '../../services/education-page-data.service';
import { Console } from 'console';

@Component({
  selector: 'app-personal-info-2',
  templateUrl: './personal-info-2.component.html',
  styleUrl: './personal-info-2.component.scss'
})
export class PersonalInfo2Component implements OnInit{
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
    techExpName:this.SharedServiceService.experiencedData.techFam,
    otherExp:this.SharedServiceService.experiencedData.otherExp,
    techFam:this.SharedServiceService.experiencedData.techFam,
    techFamName:this.SharedServiceService.experiencedData.techFam,
    otherFam:this.SharedServiceService.experiencedData.otherFam,
    onNotice:this.SharedServiceService.experiencedData.onNotice,
    endDate:this.SharedServiceService.experiencedData.endDate,
    duration:this.SharedServiceService.experiencedData.duration,
    appeared:this.SharedServiceService.experiencedData.appeared,
    roleApplied:this.SharedServiceService.experiencedData.roleApplied
  }

  passingYears:number[]=[2024,2025,2026,2027];
  subjectListExp:{name:string,selected:boolean,id:number}[]=[
  {name:"Javascript",selected:false,id:1}
  ,{name:"Angular JS",selected:false,id:2}
  ,{name:"React",selected:false,id:3}
  ,{name:"Node JS",selected:false,id:4}
  ,{name:"Others",selected:false,id:5}
];
subjectListFam:{name:string,selected:boolean,id:number}[]=[
  {name:"Javascript",selected:false,id:1}
  ,{name:"Angular JS",selected:false,id:2}
  ,{name:"React",selected:false,id:3}
  ,{name:"Node JS",selected:false,id:4}
  ,{name:"Others",selected:false,id:5}
];
  QualificationList:any;

    
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
          
          }
  ngOnInit(): void {
    this.edu.getdata().subscribe(data=>{
      this.QualificationList = data;
      console.log(this.QualificationList);
    });
    for(let i=0;i<this.subjectListExp.length;i++)
    {
      console.log(i)
      if(this.experiencedData.techExp.includes(this.subjectListExp[i].id))
      {
        this.subjectListExp[i].selected = true;
        console.log(this.subjectListExp[i])
      }
    }


    for(let i=0;i<this.subjectListFam.length;i++)
    {
      console.log(i)
      if(this.experiencedData.techFam.includes(this.subjectListFam[i].id))
      {
        this.subjectListFam[i].selected = true;
        console.log(this.subjectListFam[i])
      }
    }
  }

  navigateFunction():void{
    this.router.navigate(['/createAccount']);
  }

  onCheckedExp(event:any,id:number)
  {
    for(let i=0;i < this.subjectListExp.length;i++)
    {
      if(this.subjectListExp[i].id==id)
      {
          this.subjectListExp[i].selected = !this.subjectListExp[i].selected
          console.log(this.subjectListExp[i].id,this.subjectListExp[i].selected)
      }
    }
  }
  onCheckedFam(event:any,id:number)
  {
    for(let i=0;i < this.subjectListFam.length;i++)
    {
      if(this.subjectListFam[i].id==id)
      {
          this.subjectListFam[i].selected = !this.subjectListFam[i].selected
          console.log(this.subjectListFam[i].id,this.subjectListFam[i].selected)
      }
    }
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
    this.experiencedData.techExpName = this.selectedExpDataName
    this.experiencedData.techFamName = this.selectedFamDataName
    this.experiencedData.techFam = this.selectedFamData
    this.experiencedData.techExp = this.selectedExpData
    this.SharedServiceService.updateExperiencedData(this.experiencedData);
    console.log(this.SharedServiceService.getExperiencedData());
    this.router.navigate(['/review']);
  }
  get selectedExpData()
  {
    var expData:number[]=[];
      for(let item in this.subjectListExp)
      {
          if(this.subjectListExp[item].selected)
          {
            expData.push(this.subjectListExp[item].id);
          }
      }
      return expData;
  }
  get selectedExpDataName()
  {
    var jobpreffered:string[]=[];
    for(let item in this.subjectListExp)
    {
        if(this.subjectListExp[item].selected)
        {
          jobpreffered.push(this.subjectListExp[item].name);
        }
    }
    return jobpreffered;
  }
  get selectedFamDataName()
  {
    var jobpreffered:string[]=[];
    for(let item in this.subjectListFam)
    {
        if(this.subjectListFam[item].selected)
        {
          jobpreffered.push(this.subjectListFam[item].name);
        }
    }
    return jobpreffered;
  }
  get selectedFamData()
  {
      var famData:number[]=[];
      for(let item in this.subjectListFam)
      {
          if(this.subjectListFam[item].selected)
          {
            famData.push(this.subjectListFam[item].id);
          }
      }
      return famData;
  }

}