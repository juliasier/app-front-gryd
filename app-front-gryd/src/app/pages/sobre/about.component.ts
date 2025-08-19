import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  readonly panelOpenState = signal(false);

  onOpened() {
    this.panelOpenState.set(true);
    console.log('Panel aberto');
  }

  onClosed() {
    this.panelOpenState.set(false);
    console.log('Panel fechado');
  }
}
