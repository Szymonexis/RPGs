import { Component, Input } from '@angular/core';
import {
  Hero,
  HeroDescription,
} from '../../shared/services/data-provider.model';
import { InstanceOfPipe } from '../../shared/pipes/instance-of.pipe';
import { CommonModule } from '@angular/common';
import { TypedTemplateDirective } from '../../shared/directives/typed-template.directive';
import { $as } from '../../shared/utils/utils';

@Component({
  selector: 'app-simple-section',
  standalone: true,
  imports: [InstanceOfPipe, CommonModule, TypedTemplateDirective],
  templateUrl: './simple-section.component.html',
  styleUrl: './simple-section.component.scss',
})
export class SimpleSectionComponent {
  @Input() data: Hero | HeroDescription | null = null;

  Hero = Hero;
  HeroDescription = HeroDescription;

  $as = $as;
}
