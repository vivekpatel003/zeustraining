import { Component } from '@angular/core';
import { SharedServiceService} from '../../services/shared-service.service';
import { EducationPageDataService } from '../../services/education-page-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss'
})
export class PersonalInfoComponent {
  createButton:boolean = false;
  backButton:string = "createAccount";
    jobs:{
      name:string,
      selected:boolean,
      id:number
    }[]=[
      { name:"Instructional Designer", selected:false,id:1},
      { name:"Software Engineer", selected:false,id:2},
      { name:"Software Quality Engineer", selected:false,id:3} 
    ]
   
    personalData={
      firstName:this.SharedServiceService.personalData.firstName,
      lastName:this.SharedServiceService.personalData.lastName,
      Email:this.SharedServiceService.personalData.Email,
      countryCode:this.SharedServiceService.personalData.countryCode,
      phoneNumber:this.SharedServiceService.personalData.phoneNumber,
      uploadImage:this.SharedServiceService.personalData.uploadImage,
      portfolio:this.SharedServiceService.personalData.portfolio,
      selectedJob:this.SharedServiceService.personalData.selectedJob,
      reffredPerson:this.SharedServiceService.personalData.reffredPerson,
      notification:this.SharedServiceService.personalData.notification
    }
    filled_data:any;
    constructor(private SharedServiceService:SharedServiceService,private router:Router,private edu: EducationPageDataService){}
    getData():void
    {
      this.edu.getEmailChecked({
        "email": this.personalData.Email
      }).subscribe(obj=>{
        if(!obj)
        {
          this.personalData.selectedJob = this.jobChoosen;
          this.SharedServiceService.updatePersonalInfoData(this.personalData);
          console.log(this.SharedServiceService.getPersonalInfoData())
          this.router.navigate(['/education'])
        }
        else{
          alert("Email already Exist!");
        }
      })
      
    }

    get jobChoosen()
    {
      var jobpreffered:number[]=[];
      for(let item in this.jobs)
      {
          if(this.jobs[item].selected)
          {
            jobpreffered.push(this.jobs[item].id);
          }
      }
      return jobpreffered;
    }
}
