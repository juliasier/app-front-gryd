import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  };

  services = [
    'Desenvolvimento de Sites',
    'E-commerce',
    'Aplicações Web',
    'SEO',
    'Marketing Digital',
    'Consultoria',
    'Outro'
  ];

  contactMethods = [
    {
      icon: 'fas fa-phone',
      title: 'Telefone',
      value: '+55 (11) 99999-9999',
      link: 'tel:+5511999999999'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'contato@gryd.com',
      link: 'mailto:contato@gryd.com'
    },
    {
      icon: 'fab fa-whatsapp',
      title: 'WhatsApp',
      value: '+55 (11) 99999-9999',
      link: 'https://wa.me/5511999999999'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Endereço',
      value: 'São Paulo, SP - Brasil',
      link: '#'
    }
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
    }
  ];

  onSubmit() {
    // Aqui você implementaria a lógica de envio do formulário
    console.log('Formulário enviado:', this.contactForm);
    
    // Simular envio bem-sucedido
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    
    // Limpar formulário
    this.contactForm = {
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    };
  }

  isFormValid(): boolean {
    return !!(
      this.contactForm.name &&
      this.contactForm.email &&
      this.contactForm.message
    );
  }
}