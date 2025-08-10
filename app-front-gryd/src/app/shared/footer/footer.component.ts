import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { name: 'Início', url: '#home' },
    { name: 'Sobre', url: '#sobre' },
    { name: 'Serviços', url: '#servicos' },
    { name: 'Motivos', url: '#motivos' },
    { name: 'Equipe', url: '#equipe' },
    { name: 'Contato', url: '#contato' }
  ];

  services = [
    { name: 'Desenvolvimento Web', url: '#' },
    { name: 'E-commerce', url: '#' },
    { name: 'Aplicações Mobile', url: '#' },
    { name: 'SEO & Marketing', url: '#' },
    { name: 'Consultoria Digital', url: '#' },
    { name: 'Suporte Técnico', url: '#' }
  ];

  socialLinks = [
    {
      icon: 'fab fa-linkedin-in',
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/gryd'
    },
    {
      icon: 'fab fa-instagram',
      name: 'Instagram',
      url: 'https://instagram.com/gryd.oficial'
    },
    {
      icon: 'fab fa-github',
      name: 'GitHub',
      url: 'https://github.com/gryd'
    },
    {
      icon: 'fab fa-behance',
      name: 'Behance',
      url: 'https://behance.net/gryd'
    },
    {
      icon: 'fab fa-dribbble',
      name: 'Dribbble',
      url: 'https://dribbble.com/gryd'
    }
  ];

  contactInfo = {
    phone: '+55 (11) 99999-9999',
    email: 'contato@gryd.com',
    address: 'São Paulo, SP - Brasil'
  };

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}