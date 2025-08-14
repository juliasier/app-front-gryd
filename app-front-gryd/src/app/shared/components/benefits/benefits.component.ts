import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss'
})
export class BenefitsComponent {
  benefits = [
    {
      icon: 'performance',
      title: 'Performance Otimizada',
      description: 'Sites e aplicações ultra-rápidos que convertem mais visitantes em clientes'
    },
    {
      icon: 'quality',
      title: 'Qualidade Premium',
      description: 'Código limpo, design moderno e experiência do usuário excepcional'
    },
    {
      icon: 'support',
      title: 'Suporte 24/7',
      description: 'Equipe especializada sempre disponível para garantir seu sucesso'
    },
    {
      icon: 'results',
      title: 'Resultados Garantidos',
      description: 'Metodologia comprovada que entrega ROI positivo em 90 dias'
    }
  ];
}