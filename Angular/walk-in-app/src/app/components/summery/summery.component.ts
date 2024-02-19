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
      firstName:this.SharedServiceService.personalData.firstName,
      lastName:this.SharedServiceService.personalData.lastName,
      Email:this.SharedServiceService.personalData.Email,
      countryCode:this.SharedServiceService.personalData.countryCode,
      phoneNumber:this.SharedServiceService.personalData.phoneNumber,
      uploadImage:this.SharedServiceService.personalData.uploadImage,
      portfolio:this.SharedServiceService.personalData.portfolio,
      selectedJob:this.SharedServiceService.personalData.selectedJob,
      reffredPerson:this.SharedServiceService.personalData.reffredPerson,
      notification:this.SharedServiceService.personalData.notificationthis
    };
    educationQualificationData:any={
      show:this.SharedServiceService.educationData.show,
      percentageVal:this.SharedServiceService.educationData.percentageVal,
      passingYear:this.SharedServiceService.educationData.passingYear,
      qualification:this.SharedServiceService.educationData.qualification,
      stream:this.SharedServiceService.educationData.stream,
      college:this.SharedServiceService.educationData.college,
      other:this.SharedServiceService.educationData.other,
      location:this.SharedServiceService.educationData.location
    };
  
    professionalQualificationData:any={
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
    };
   
   

    constructor(private SharedServiceService:SharedServiceService,private router:Router){
      this.personalData = this.SharedServiceService.getPersonalInfoData();
      this.educationQualificationData = this.SharedServiceService.getEducationData();  
      this.professionalQualificationData = this.SharedServiceService.getExperiencedData();
      console.log(this.educationQualificationData.show)
      console.log(this.personalData)
      console.log(this.educationQualificationData)
      console.log(this.professionalQualificationData)
    }

    navigateFunction():void{
      this.router.navigate(['/education']);
    }

}
