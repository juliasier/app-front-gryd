import { Component } from '@angular/core';
import { MotivosComponent } from './pages/motivos/motivos.component';
import { SobreComponent } from './pages/sobre/sobre.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports:[
    MotivosComponent,
    SobreComponent,

  ]
})
export class AppComponent {
  title = 'app-front-gryd';
}
