import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WalkinComponent } from './walkin/walkin.component';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,WalkinComponent,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'job_portal';
  
}
