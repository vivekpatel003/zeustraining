import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SharedServiceService } from '../../services/shared-service.service';
import { EducationPageDataService } from '../../services/education-page-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss',
})
export class PersonalInfoComponent implements OnInit {
  @ViewChild('uploadImage') fileInput: ElementRef;
  createButton: boolean = false;
  backButton: string = 'createAccount';
  done: boolean;
  jobs: {
    name: string;
    selected: boolean;
    id: number;
  }[] = [
    { name: 'Instructional Designer', selected: false, id: 1 },
    { name: 'Software Engineer', selected: false, id: 2 },
    { name: 'Software Quality Engineer', selected: false, id: 3 },
  ];

  personalData = {
    firstName: this.SharedServiceService.personalData.firstName,
    lastName: this.SharedServiceService.personalData.lastName,
    Email: this.SharedServiceService.personalData.Email,
    countryCode: this.SharedServiceService.personalData.countryCode,
    phoneNumber: this.SharedServiceService.personalData.phoneNumber,
    uploadImage: '',
    portfolio: this.SharedServiceService.personalData.portfolio,
    selectedJob: this.SharedServiceService.personalData.selectedJob,
    selectedJobName: this.SharedServiceService.personalData.selectedJobNames,
    reffredPerson: this.SharedServiceService.personalData.reffredPerson,
    notification: this.SharedServiceService.personalData.notification,
  };
  filled_data: any;
  constructor(
    private SharedServiceService: SharedServiceService,
    private router: Router,
    private edu: EducationPageDataService
  ) {}
  ngOnInit(): void {
    for (let i = 0; i < this.jobs.length; i++) {
      console.log(i);
      if (this.personalData.selectedJob.includes(this.jobs[i].id)) {
        this.jobs[i].selected = true;
        console.log(this.jobs[i]);
      }
    }
    this.done = true;
    // throw new Error('Method not implemented.');
  }

  onChecked(event: any, id: number) {
    for (let i = 0; i < this.jobs.length; i++) {
      if (this.jobs[i].id == id) {
        this.jobs[i].selected = !this.jobs[i].selected;
        console.log(this.jobs[i].id, this.jobs[i].selected);
      }
    }
  }
  getData(): void {
    this.edu
      .getEmailChecked({
        email: this.personalData.Email,
      })
      .subscribe((obj) => {
        if (!obj) {
          this.personalData.selectedJobName = this.jobNames;
          console.log(this.personalData.selectedJobName);
          this.personalData.selectedJob = this.jobChoosen;
          this.SharedServiceService.updatePersonalInfoData(this.personalData);
          console.log(this.SharedServiceService.getPersonalInfoData());
          this.router.navigate(['/education']);
        } else {
          alert('Email already Exist!');
        }
      });
  }
  get jobNames() {
    var jobpreffered: string[] = [];
    for (let item in this.jobs) {
      if (this.jobs[item].selected) {
        jobpreffered.push(this.jobs[item].name);
      }
    }
    return jobpreffered;
  }
  get jobChoosen() {
    var jobpreffered: number[] = [];
    for (let item in this.jobs) {
      if (this.jobs[item].selected) {
        jobpreffered.push(this.jobs[item].id);
      }
    }
    return jobpreffered;
  }
}
