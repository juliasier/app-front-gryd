import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() isOpen = false;
  @Output() closeSidebar = new EventEmitter<void>();
  @Output() navigateToSection = new EventEmitter<string>();

  onNavigate(section: string) {
    this.navigateToSection.emit(section);
    this.closeSidebar.emit();
  }

  onClose() {
    this.closeSidebar.emit();
  }

  onBackdropClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.closeSidebar.emit();
    }
  }
}
