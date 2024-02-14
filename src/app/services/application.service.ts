import { Injectable,inject } from '@angular/core';
import { UserauthService } from './userauth.service';

import { Application } from '../interfaces/application';
@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  applications:Application[]=[]
  userservice:UserauthService=inject(UserauthService)
  constructor() { 

  }
  apply(walkinid:number,roles:number[],timeslot:number):number{
    console.log("-")
    this.applications.push({
      id:this.applications.length,
      walkinId:walkinid,
      userId:this.userservice.getLoggedUser(),
      roles:roles,
      timeslot:timeslot
    })
    return this.applications[this.applications.length-1].id;
  }
  getApplicationById(id:number):Application | undefined{
    return this.applications.find(t=>t.id==id)
  }
}
