import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'multiply',
})
export class MultiplyPipe implements PipeTransform {
  transform(a: number, b: number): number {
    console.log(`Multiply: ${a * b}`);
    return a * b;
  }
}
