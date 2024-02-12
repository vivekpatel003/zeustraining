import { Component } from '@angular/core';
import { SharedServiceService } from '../../services/shared-service.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-summery',
  templateUrl: './summery.component.html',
  styleUrl: './summery.component.scss'
})
export class SummeryComponent {
  createButton:boolean= true;
  backButton:string='summery';
    personalData:any={
      firstName:'',
      lastName:'',
      Email:'',
      countryCode:'',
      phoneNumber:'',
      uploadImage:'',
      portfolio:'',
      selectedJob:[],
      reffredPerson:'',
      notification:''
    };
    educationQualificationData:any={
      show:'',
      percentageVal:'',
      passingYear:'',
      qualification:'',
      stream:'',
      college:'',
      other:'',
      location:''
    };
  
    professionalQualificationData:any={
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
    };
   
   

    constructor(private SharedServiceService:SharedServiceService,private router:Router){
      // this.personalData = this.SharedServiceService.getPersonalInfoData();
      // this.educationQualificationData = this.SharedServiceService.getEducationData();  
      // this.professionalQualificationData = this.SharedServiceService.getExperiencedData();
      // console.log(this.educationQualificationData.show)
      console.log(this.personalData)
      console.log(this.educationQualificationData)
      console.log(this.professionalQualificationData)
    }

    navigateFunction():void{
      this.router.navigate(['/education']);
    }

}
