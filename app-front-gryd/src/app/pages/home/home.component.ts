import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BenefitsComponent } from '../../shared/components/benefits/benefits.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BenefitsComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
