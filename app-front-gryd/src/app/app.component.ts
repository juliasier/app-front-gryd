import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BenefitsComponent } from './pages/benefits/benefits.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { AboutComponent } from './pages/sobre/about.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HomeComponent,
    BenefitsComponent, 
    AboutComponent,
    OurServicesComponent,
    ReviewsComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-front-gryd';
}
