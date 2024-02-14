import { Routes } from '@angular/router';
import { WalkinComponent } from './walkin/walkin.component';
import { LoginComponent } from './login/login.component';
import { WalkinJobsListComponent } from './walkin-jobs-list/walkin-jobs-list.component';
import { WalkinJobsComponent } from './walkin-jobs/walkin-jobs.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserqualComponent } from './userqual/userqual.component';
import { UserreviewComponent } from './userreview/userreview.component';
import { HallticketComponent } from './hallticket/hallticket.component';


export const routes: Routes = [
    {
        path:'',
        component:WalkinComponent,
        children:[
            {
                path:'',
                component:WalkinJobsListComponent
            },
            {
                path:'walkin/:id',
                component:WalkinJobsComponent
            },
            {
                path:'user/personal',
                component:UserdetailsComponent
            },
            {
                path:'user/qualification',
                component:UserqualComponent
            },
            {
                path:'user/review',
                component:UserreviewComponent    
            },
            {
                path:'walkin/application/:id',
                component:HallticketComponent
            }
        ]
    },
    {
        path:'login',
        component:LoginComponent,
    }
];
