import { Injectable } from '@angular/core';
import { Roles } from '../interfaces/roles';
import { Walkinjobs } from '../interfaces/walkinjobs';
import { Walkins } from '../interfaces/Walkins';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WalkinService {
  roles:Roles[]=[]
  walkinJobs:Walkins[]=[]

  constructor(private http:HttpClient) {}
   async getAllWalkinJobs():Promise<Walkins[]>{
    let url = 'http://localhost:5200/api/walkin'
    const data = await fetch(url);
    return await data.json() ?? [] 
   }
   getWalkinJobsById(id:number):Observable<Walkinjobs>{
    let url ='http://localhost:5200/api/walkin/' + id;
    const token=localStorage.getItem('access_token');
    return this.http.get<Walkinjobs>(url,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    });
   }
   async getAllRoles():Promise<Roles[]>{
    let url ='http://localhost:5200/api/role'
    const data = await fetch(url);
    return data.json()??[];
   }
 
}
  