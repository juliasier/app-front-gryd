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
  
  // Seções do footer organizadas em grid
  footerSections = {
    company: {
      title: 'GRYD',
      description: 'Transformamos ideias em soluções digitais inovadoras que impulsionam o crescimento do seu negócio.',
      logo: '🚀'
    },
    quickLinks: {
      title: 'Links Rápidos',
      links: [
        { name: 'Início', url: '/', icon: '🏠' },
        { name: 'Sobre', url: '/about', icon: '👥' },
        { name: 'Serviços', url: '/services', icon: '⚙️' },
        { name: 'Portfolio', url: '/portfolio', icon: '💼' },
        { name: 'Blog', url: '/blog', icon: '📝' }
      ]
    },
    services: {
      title: 'Serviços',
      links: [
        { name: 'Desenvolvimento Web', url: '/web-dev', icon: '🌐' },
        { name: 'Apps Mobile', url: '/mobile', icon: '📱' },
        { name: 'UI/UX Design', url: '/design', icon: '🎨' },
        { name: 'E-commerce', url: '/ecommerce', icon: '🛒' },
        { name: 'Consultoria', url: '/consulting', icon: '💡' }
      ]
    },
    contact: {
      title: 'Contato',
      info: [
        { type: 'email', value: 'contato@gryd.com', icon: '📧', link: 'mailto:contato@gryd.com' },
        { type: 'phone', value: '(11) 99999-9999', icon: '📱', link: 'tel:+5511999999999' },
        { type: 'address', value: 'São Paulo, SP - Brasil', icon: '📍', link: '#' },
        { type: 'hours', value: 'Seg-Sex: 9h às 18h', icon: '🕒', link: '#' }
      ]
    }
  };
  
  socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/company/gryd', color: '#0077B5' },
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/gryd', color: '#333' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com/gryd', color: '#E4405F' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/gryd', color: '#1DA1F2' }
  ];
  
  legalLinks = [
    { name: 'Política de Privacidade', url: '/privacy' },
    { name: 'Termos de Uso', url: '/terms' },
    { name: 'Cookies', url: '/cookies' }
  ];
}