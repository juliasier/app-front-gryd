import { Component } from '@angular/core';
import { MotivosComponent } from './pages/motivos/motivos.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports:[
    HomeComponent,
    MotivosComponent,
    SobreComponent,

  ]
})
export class AppComponent {
isSidebarOpen = false;

toggleSidebar() {
  this.isSidebarOpen = !this.isSidebarOpen;
}}