import { Component,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Walkinjobs } from '../interfaces/walkinjobs';


import { ApplicationService } from '../services/application.service';
import { WalkinService } from '../services/walkin.service';
import { Application } from '../interfaces/application';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-hallticket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hallticket.component.html',
  styleUrl: './hallticket.component.scss'
})
export class HallticketComponent {
  route:ActivatedRoute=inject(ActivatedRoute);
  walkinservice:WalkinService=inject(WalkinService);
  appliservice:ApplicationService=inject(ApplicationService)
  walkin:Walkinjobs | undefined;
  application:Application | undefined;
  appId:number;
  timeslot:string;
  constructor(){
    this.appId=Number(this.route.snapshot.params['id']);
    this.application=this.appliservice.getApplicationById(this.appId);
    this.walkin=this.walkinservice.getWalkinJobsById(this.application?.walkinId??-1);
    this.timeslot=this.walkin?.timeslots.find(t=>t.id==this.application?.timeslot)?.time??'';
  }
}

