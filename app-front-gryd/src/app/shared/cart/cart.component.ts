import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCard } from '../service-card/service-card.component';

export interface CartItem extends ServiceCard {
  quantity: number;
  subtotal: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  @Input() isOpen: boolean = false;
  @Input() items: CartItem[] = [];
  @Output() closeCart = new EventEmitter<void>();
  @Output() removeItem = new EventEmitter<string>();
  @Output() updateQuantity = new EventEmitter<{id: string, quantity: number}>();
  @Output() clearCart = new EventEmitter<void>();
  @Output() checkout = new EventEmitter<CartItem[]>();

  get totalItems(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  get totalPrice(): number {
    return this.items.reduce((total, item) => total + item.subtotal, 0);
  }

  get totalOriginalPrice(): number {
    return this.items.reduce((total, item) => {
      const originalPrice = item.originalPrice || item.price;
      return total + (originalPrice * item.quantity);
    }, 0);
  }

  get totalSavings(): number {
    return this.totalOriginalPrice - this.totalPrice;
  }

  onClose() {
    this.closeCart.emit();
  }

  onRemoveItem(itemId: string) {
    this.removeItem.emit(itemId);
  }

  onUpdateQuantity(itemId: string, quantity: number) {
    if (quantity > 0) {
      this.updateQuantity.emit({ id: itemId, quantity });
    } else {
      this.onRemoveItem(itemId);
    }
  }

  onClearCart() {
    this.clearCart.emit();
  }

  onCheckout() {
    this.checkout.emit(this.items);
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  }

  onBackdropClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }

  trackByItemId(index: number, item: CartItem): string {
    return item.id;
  }
}