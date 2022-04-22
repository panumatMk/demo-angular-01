import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'memolize'
})
export class MemolizePipe implements PipeTransform {

  transform(fn: Function, ...args: unknown[]): unknown {
    return fn(...args);
  }

}
