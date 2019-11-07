import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: any, length: number = 20, suf: string = '...'): any {
    return value.substring(0, length) + (value.length > length ? suf : '');
  }
}

