import { Component,OnInit } from '@angular/core';
import { SpecJobPageService } from '../../services/spec-job-page.service';

@Component({
  selector: 'app-hall-ticket-page',
  templateUrl: './hall-ticket-page.component.html',
  styleUrl: './hall-ticket-page.component.scss'
})
export class HallTicketPageComponent implements OnInit{

  HallTicketData:any;
  dp:boolean=true; 

  public constructor (private spec:SpecJobPageService){}
    ngOnInit(): void {
      this.spec.getHallTicketData(
        {
          "email": sessionStorage.getItem('login')
        }
      ).subscribe((data)=>{
          this.HallTicketData = JSON.parse(data)[0].time;
          console.log(this.HallTicketData);
      });
      // throw new Error('Method not implemented.');
    }
   
    printPage():void
    {
        window.print();
    }
}
