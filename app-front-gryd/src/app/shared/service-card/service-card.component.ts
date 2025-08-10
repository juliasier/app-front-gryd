import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  price: number;
  originalPrice?: number;
  features: string[];
  badge?: string;
  popular?: boolean;
  category: string;
  duration: string;
  deliverables: string[];
}

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent {
  @Input() service!: ServiceCard;
  @Input() showAddToCart: boolean = true;
  @Output() addToCart = new EventEmitter<ServiceCard>();
  @Output() viewDetails = new EventEmitter<ServiceCard>();

  onAddToCart() {
    this.addToCart.emit(this.service);
  }

  onViewDetails() {
    this.viewDetails.emit(this.service);
  }

  getDiscountPercentage(): number {
    if (this.service.originalPrice && this.service.price) {
      return Math.round(((this.service.originalPrice - this.service.price) / this.service.originalPrice) * 100);
    }
    return 0;
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  }
}