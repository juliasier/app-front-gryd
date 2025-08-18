import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Review {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
}

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  currentIndex = 0;
  
  reviews: Review[] = [
    {
      id: 1,
      name: 'Roberto Alves',
      role: 'Arquiteto',
      image: 'assets/images/person/person-roberto.svg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut diam felis vide imperdiet finibus sit sed sem lorem, consectetur adipiscing elit.'
    },
    {
      id: 2,
      name: 'Camila Pereira',
      role: 'Designer de Interiores',
      image: 'assets/images/person/person-camila.svg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut diam felis vide imperdiet finibus sit sed sem lorem, consectetur adipiscing elit.'
    },
    {
      id: 3,
      name: 'Carlos Almeida',
      role: 'Engenheiro Civil',
      image: 'assets/images/person/person-carlos.svg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut diam felis vide imperdiet finibus sit sed sem lorem, consectetur adipiscing elit.'
    }
  ];

  get isFirstItem(): boolean {
    return this.currentIndex === 0;
  }

  get isLastItem(): boolean {
    return this.currentIndex === this.reviews.length - 1;
  }

  previousReview(): void {
    if (!this.isFirstItem) {
      this.currentIndex--;
    }
  }

  nextReview(): void {
    if (!this.isLastItem) {
      this.currentIndex++;
    }
  }

  goToReview(index: number): void {
    this.currentIndex = index;
  }
}
