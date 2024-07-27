import { Component, Input } from '@angular/core';
import { InputConfig } from '../../shared/config';

@Component({
  selector: 'app-bohater',
  templateUrl: './bohater.component.html',
  styleUrl: './bohater.component.scss',
})
export class BohaterComponent {
  @Input() inputConfigs: InputConfig[] = [];
}
