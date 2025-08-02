import { Component } from '@angular/core';
import { MotivosComponent } from './components/section/motivos/motivos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports:[MotivosComponent]
})
export class AppComponent {
  title = 'app-front-gryd';
}
