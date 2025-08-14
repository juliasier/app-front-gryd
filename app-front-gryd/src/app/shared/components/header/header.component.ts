import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuItems = [
    { label: 'Home', route: '/', icon: '🏠' },
    { label: 'Sobre', route: '/about', icon: '👥' },
    { label: 'Serviços', route: '/services', icon: '⚙️' },
    { label: 'Portfólio', route: '/portfolio', icon: '💼' },
    { label: 'Contato', route: '/contact', icon: '📞' }
  ];

  isMenuOpen = false;
  isScrolled = false;

  constructor() {
    // Detectar scroll para efeito no header
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.isScrolled = window.scrollY > 50;
      });
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}