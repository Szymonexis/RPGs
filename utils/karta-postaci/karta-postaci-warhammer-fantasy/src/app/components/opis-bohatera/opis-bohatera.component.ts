import { Component, Input } from '@angular/core';
import { InputConfig } from '../../shared/config';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-opis-bohatera',
  templateUrl: './opis-bohatera.component.html',
  styleUrl: './opis-bohatera.component.scss',
})
export class OpisBohateraComponent {
  constructor(public dataService: DataService) {}

  @Input() inputConfigs: InputConfig[] = [];
}
