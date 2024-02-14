import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


import { WalkinJobsListComponent } from '../walkin-jobs-list/walkin-jobs-list.component';
import { WalkinJobsComponent } from '../walkin-jobs/walkin-jobs.component';
import { HallticketComponent } from '../hallticket/hallticket.component';
import { UserdetailsComponent } from '../userdetails/userdetails.component';
import { UserqualComponent } from '../userqual/userqual.component';
import { UserreviewComponent } from '../userreview/userreview.component';





@Component({
  selector: 'app-walkin',
  standalone: true,
  imports: [RouterModule,WalkinJobsListComponent,CommonModule,WalkinJobsComponent,HallticketComponent,UserdetailsComponent,UserqualComponent,UserreviewComponent],
  templateUrl: './walkin.component.html',
  styleUrl: './walkin.component.scss'
})
export class WalkinComponent {

}
