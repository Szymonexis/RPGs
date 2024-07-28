import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'instanceOf',
  standalone: true,
})
export class InstanceOfPipe implements PipeTransform {
  transform<T, K>(value: T, classInstance: K): boolean {
    return value instanceof classInstance;
  }
}

type InstanceOfCompatibleObject = Pick<Symbol, 'description'>
