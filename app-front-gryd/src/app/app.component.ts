import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BenefitsComponent } from './pages/benefits/benefits.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HomeComponent,
    BenefitsComponent, 
    SobreComponent,
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
