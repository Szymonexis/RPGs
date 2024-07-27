import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataProviderService {
  sheetData$ = new BehaviorSubject(null);

  constructor() {}
}
