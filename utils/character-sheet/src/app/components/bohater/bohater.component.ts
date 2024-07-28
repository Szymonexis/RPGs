import { Component, Input } from '@angular/core';
import {
  Hero,
  HeroDescription,
} from '../../shared/services/data-provider.model';
import { InstanceOfPipe } from '../../shared/pipes/instance-of.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bohater',
  standalone: true,
  imports: [InstanceOfPipe, CommonModule],
  templateUrl: './bohater.component.html',
  styleUrl: './bohater.component.scss',
})
export class BohaterComponent {
  @Input() data: Hero | HeroDescription | null = null;
  @Input() name: string | null = null;

  heroClass = new Hero();
  HeroDescription = new HeroDescription();

  $as<K>(val: any, classInstance: K): K {
    return val as K;
  }
}
