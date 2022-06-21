/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pipe, PipeTransform } from '@angular/core';

/**
 * Typed mapping function.
 */
export type TransformFn<T, G> = (item: T, ...args: any[]) => G;

@Pipe({
  standalone: true,
  name: 'transform',
})
export class CdkTransformPipe implements PipeTransform {
  /**
   * Maps object to an arbitrary result through a mapper function
   *
   * @param mapper a mapping function
   * @param value an item to transform
   * @param args arbitrary number of additional arguments
   */
  transform<T, G>(value: T, transform: TransformFn<T, G>, ...args: any[]): G {
    return transform(value, ...args);
  }
}
