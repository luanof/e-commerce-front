import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'reduzerFrases'
})
export class ReduzerFrases implements PipeTransform {
  transform(frase: string) {
    return frase.substring(0, 30) + '...';
  }
}
