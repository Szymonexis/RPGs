import { Component } from '@angular/core';
import { SECTION_CONFIGS } from './shared/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  SECTION_CONFIGS = SECTION_CONFIGS;
}
