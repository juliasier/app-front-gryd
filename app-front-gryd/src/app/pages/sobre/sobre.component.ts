import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SobreComponent {
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
