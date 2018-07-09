import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distance'
})
export class DistancePipe implements PipeTransform {

  transform(value: number, ...args: string[]): any {
    if (value < 1000) {
      return `${value}m`;
    } else {
      return `${value / 1000}km`;
    }
  }

}
