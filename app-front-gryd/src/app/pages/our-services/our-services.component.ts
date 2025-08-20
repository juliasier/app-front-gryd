import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss'],
})
export class OurServicesComponent {
  servicos = [
    {
      id: 1,
      imagem: 'assets/images/products/note.svg',
      beneficios: [
        'Layout responsivo e moderno',
        'SEO otimizado desde o início',
        'Integração com redes sociais',
        'Painel administrativo completo'
      ]
    },
    {
      id: 2,
      titulo: 'SEO Otimizado',
      descricao: 'Impulsione o tráfego orgânico do seu site com nossas estratégias.',
      imagem: 'assets/images/products/note.svg',
      beneficios: [
        'Análise completa de palavras-chave',
        'Otimização on-page e off-page',
        'Relatórios mensais de performance',
        'Aumento do ranking no Google'
      ]
    },
    {
      id: 3,
      titulo: 'Gerenciamento Analytics',
      descricao: 'Acompanhe e analise dados importantes do seu negócio.',
      imagem: 'assets/images/products/note.svg',
      beneficios: [
        'Configuração do Google Analytics',
        'Dashboards personalizados',
        'Relatórios automatizados',
        'Insights estratégicos de negócio'
      ]
    },
    {
      id: 4,
      titulo: 'Marketing Digital',
      descricao: 'Estratégias completas para aumentar sua presença online.',
      imagem: 'assets/images/products/note.svg',
      beneficios: [
        'Gestão de redes sociais',
        'Campanhas de Google Ads',
        'Email marketing automatizado',
        'Análise de concorrência'
      ]
    },
    {
      id: 5,
      titulo: 'E-commerce',
      descricao: 'Lojas virtuais completas para vender online.',
      imagem: 'assets/images/products/note.svg',
      beneficios: [
        'Plataforma de vendas robusta',
        'Integração com meios de pagamento',
        'Gestão de estoque automatizada',
        'Relatórios de vendas detalhados'
      ]
    }
  ];

  indiceAtual = 0;

  get servicoAtual() {
    return this.servicos[this.indiceAtual];
  }

  anterior() {
    this.indiceAtual =
      (this.indiceAtual - 1 + this.servicos.length) % this.servicos.length;
  }

  proximo() {
    this.indiceAtual = (this.indiceAtual + 1) % this.servicos.length;
  }

  irParaSlide(indice: number) {
    this.indiceAtual = indice;
  }

  trackByServicoId(index: number, servico: any): number {
    return servico.id;
  }
}