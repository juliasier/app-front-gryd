import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonials = [
    {
      id: 1,
      name: 'Maria Silva',
      role: 'CEO da TechStart',
      image: 'assets/images/testimonials/maria.jpg',
      rating: 5,
      text: 'A GRYD transformou completamente nossa presença digital. O resultado superou todas as expectativas!'
    },
    {
      id: 2,
      name: 'João Santos',
      role: 'Diretor de Marketing',
      image: 'assets/images/testimonials/joao.jpg',
      rating: 5,
      text: 'Profissionais excepcionais! Entregaram um projeto de qualidade superior no prazo combinado.'
    },
    {
      id: 3,
      name: 'Ana Costa',
      role: 'Empreendedora',
      image: 'assets/images/testimonials/ana.jpg',
      rating: 5,
      text: 'Recomendo a GRYD para qualquer empresa que busca excelência em desenvolvimento web.'
    }
  ];

  currentIndex = 0;

  nextTestimonial() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevTestimonial() {
    this.currentIndex = this.currentIndex === 0 ? this.testimonials.length - 1 : this.currentIndex - 1;
  }

  goToTestimonial(index: number) {
    this.currentIndex = index;
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}