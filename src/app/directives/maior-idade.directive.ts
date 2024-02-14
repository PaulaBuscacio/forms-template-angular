import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[maiorIdadeValidator]',
  providers:[{
    provide: NG_VALIDATORS,
    useExisting: MaiorIdadeDirective,
    multi: true
  }]
})
export class MaiorIdadeDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    const dataNascimento = control.value
    //valida apenas o ano
    //const anoNascimento = new Date(dataNascimento).getFullYear()
   // const anoNascMais18 = anoNascimento + 18
    //const anoAtual = new Date().getFullYear()
    // const ehMaior = anoNascMais18 <= anoAtual
    // return ehMaior ? null : {'maiorIdadeValidator': true}

    //valida se eh maior de 18 pela data
    const data = new Date(dataNascimento)
    const hoje = new Date()
    const idade = hoje.getFullYear() - data.getFullYear()

    if (idade < 18 || (idade === 18 && hoje < new Date(hoje.getFullYear(), data.getMonth(), data.getDate()))) {
      return { maiorIdadeValidator: true };
    }
    return null
  }

}
