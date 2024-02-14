import { CommonModule } from '@angular/common';
import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';

import { Walkinjobs } from '../interfaces/walkinjobs';

import { WalkinService } from '../services/walkin.service';
import { UserauthService } from '../services/userauth.service';
@Component({
  selector: 'app-walkin-jobs-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './walkin-jobs-list.component.html',
  styleUrl: './walkin-jobs-list.component.scss'
})
export class WalkinJobsListComponent {
  walkinJobs:Walkinjobs[]=[];
  walkinservice:WalkinService=inject(WalkinService);
  userservice:UserauthService=inject(UserauthService);
  isLogedIn:boolean;
  constructor(private router:Router){
    this.walkinJobs=this.walkinservice.getAllWalkinJobs();
    this.isLogedIn=this.userservice.isLoggedIn();
  }
  onClick(event:Event){
    let target=(event.target as Element).getAttribute("value");
    if (this.isLogedIn){
      this.router.navigate(['/walkin',target]);
    }else{
    this.router.navigate(['/login']);
    }
  }
}
