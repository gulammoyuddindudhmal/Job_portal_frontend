import { Component,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { ApplicationService } from '../services/application.service';
import { CommonModule } from '@angular/common';
import { ApplicationDetail } from '../interfaces/applicationDetail';




@Component({
  selector: 'app-hallticket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hallticket.component.html',
  styleUrl: './hallticket.component.scss'
})
export class HallticketComponent {
  route:ActivatedRoute=inject(ActivatedRoute);
  appliservice:ApplicationService=inject(ApplicationService)
  application:ApplicationDetail={
    date:'',
    time:'',
    venue:'',
    address:'',
    city:'',
    pincode:'',
    phone:''
  }
  constructor(){
    this.appliservice.getAppDetails(this.route.snapshot.params["id"]).subscribe(res=>{
      this.application=res;
    })
  }
}

