import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MotivosComponent } from './pages/motivos/motivos.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ServicoComponent } from './pages/servico/servico.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { TeamComponent } from './pages/team/team.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CartComponent, CartItem } from './shared/cart/cart.component';
import { ServiceCard } from './shared/service-card/service-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HomeComponent, 
    MotivosComponent, 
    SobreComponent,
    ServicoComponent,
    TestimonialsComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent,
    CartComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-front-gryd';
  
  // Cart state
  isCartOpen = false;
  cartItems: CartItem[] = [];

  // Cart methods
  openCart() {
    this.isCartOpen = true;
  }

  closeCart() {
    this.isCartOpen = false;
  }

  addToCart(service: ServiceCard) {
    const existingItem = this.cartItems.find(item => item.id === service.id);
    
    if (existingItem) {
      this.updateCartQuantity(service.id, existingItem.quantity + 1);
    } else {
      const cartItem: CartItem = {
        ...service,
        quantity: 1,
        subtotal: service.price
      };
      this.cartItems.push(cartItem);
    }
    
    this.openCart();
  }

  removeFromCart(itemId: string) {
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
  }

  updateCartQuantity(itemId: string, quantity: number) {
    const item = this.cartItems.find(item => item.id === itemId);
    if (item) {
      item.quantity = quantity;
      item.subtotal = item.price * quantity;
    }
  }

  clearCart() {
    this.cartItems = [];
  }

  checkout(items: CartItem[]) {
    // Implementar lógica de checkout
    console.log('Checkout:', items);
    alert('Redirecionando para o checkout...');
  }
}