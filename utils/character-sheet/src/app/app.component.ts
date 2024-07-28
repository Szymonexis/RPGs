import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BohaterComponent } from './components/bohater/bohater.component';
import { GlobalStylesComponent } from './shared/components/global-styles/global-styles.component';
import { DataProviderService } from './shared/services/data-provider.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BohaterComponent,
    GlobalStylesComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(public dataProvider: DataProviderService) {}
}
