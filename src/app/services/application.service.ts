import { Injectable,inject } from '@angular/core';
import { UserauthService } from './userauth.service';

import { Application } from '../interfaces/application';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApplicationDetail } from '../interfaces/applicationDetail';




@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http:HttpClient) { 

  }
  apply(walkinid:number,roles:number[],timeslot:number):Observable<number>{
    let app:Application={
      WalkinJobId:walkinid,
      WalkinTimeId:timeslot,
      Roles:roles
    }
    return this.http.post<number>('http://localhost:5200/api/values',app,{
      headers:{
        Authorization:`Bearer ${localStorage.getItem('access_token')}`
      }
    });
  }
  getAppDetails(appId:number):Observable<ApplicationDetail>{
    return this.http.get<ApplicationDetail>('http://localhost:5200/api/values/'+appId,{
      headers:{
        Authorization:`Bearer ${localStorage.getItem('access_token')}`
      }
    });

  }
  updateResume(res:string):Observable<any>{
    return this.http.put<any>('http://localhost:5200/api/user',res,{
      headers:{
        Authorization:`Bearer ${localStorage.getItem('access_token')}`
      }
    });
  }
}
