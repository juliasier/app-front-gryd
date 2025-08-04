import { ChangeDetectionStrategy, Component, signal, ViewEncapsulation } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,  // <- isso permite aplicar estilos globais

})
export class HomeComponent {
  readonly panelOpenState = signal(false);

}
