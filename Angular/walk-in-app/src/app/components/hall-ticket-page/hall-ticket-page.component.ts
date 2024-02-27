import { Component,OnInit } from '@angular/core';
import { SpecJobPageService } from '../../services/spec-job-page.service';
import {Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-hall-ticket-page',
  templateUrl: './hall-ticket-page.component.html',
  styleUrl: './hall-ticket-page.component.scss'
})
export class HallTicketPageComponent implements OnInit{

  HallTicketData:any;
  dp:boolean=true; 
  id:number;

  public constructor (private spec:SpecJobPageService, private router: ActivatedRoute){}
    ngOnInit(): void {
      this.id = parseInt(this.router.snapshot.paramMap.get('id')) - 1;
      this.spec.getHallTicketData(
        {
          "email": sessionStorage.getItem('login'),
          "jobId": this.id
        }
      ).subscribe((data)=>{
        console.log(data)
          this.HallTicketData = data[0].timeSlot;
          console.log(this.HallTicketData);
      });
      // throw new Error('Method not implemented.');
    }
   
    printPage():void
    {
        window.print();
    }
}
