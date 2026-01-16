import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstpipe',
  standalone: true,
})
export class FirstpipePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;
    const onlyLetters = value.replace(/[^a-zA-Z]/g, '');
    return onlyLetters.split('').reverse().join('');
  }

}
