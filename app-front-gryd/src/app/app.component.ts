import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { BenefitsComponent } from './shared/components/benefits/benefits.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, HeaderComponent,BenefitsComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-front-gryd';
}
