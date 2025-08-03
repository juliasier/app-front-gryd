import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class SobreComponent {
  readonly panelOpenState = signal(false);

}
