import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'up'
})
export class UpPipe implements PipeTransform {

  transform(value: any, suffix: any): any {
    return value.toUpperCase() + suffix;
  }

}
