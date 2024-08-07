import { BehaviorSubject } from 'rxjs';

import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

import { SheetData } from './data-provider.model';

const DEFAULT_SHEET_DATA = new SheetData();

@Injectable({
  providedIn: 'root',
})
export class DataProviderService {
  sheetData$ = new BehaviorSubject<SheetData>(DEFAULT_SHEET_DATA);

  constructor(@Inject(DOCUMENT) private document: Document) {}

  loadCharacterSheet(): void {
    const input = this.document.createElement('input');
    input.type = 'file';
    input.accept = '.json';

    input.addEventListener('change', (event: Event) => {
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];

      if (file) {
        const reader = new FileReader();

        reader.readAsText(file);

        reader.onload = (e: ProgressEvent<FileReader>) => {
          const fileContents = e.target?.result as string;

          try {
            const data = JSON.parse(fileContents);
            this.sheetData$.next(data);
          } catch (error: any) {
            const err = error as Error;
            console.error('Error parsing JSON:', err);
            alert('Error parsing JSON: ' + err.message);
          } finally {
            input.remove();
          }
        };

        reader.onerror = (e: ProgressEvent<FileReader>) => {
          console.error('Error reading file:', e);
          alert('Error reading file: ' + e.target?.error?.message);

          input.remove();
        };
      }
    });

    input.click();
  }

  saveCharacterSheet(name: string): void {
    const fileContents = JSON.stringify(this.sheetData$.value);
    const blob = new Blob([fileContents], { type: 'application/json' });
    const link = this.document.createElement('a');

    link.download = `${name}.json`;
    link.href = window.URL.createObjectURL(blob);
    this.document.body.appendChild(link);
    link.click();
    this.document.body.removeChild(link);
  }
}
