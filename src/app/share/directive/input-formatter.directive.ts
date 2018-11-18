import { Directive, Host, HostListener, Output, EventEmitter, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Directive({
  selector: '[appInputFormatter]',
})
export class InputFormatterDirective {
  @Input() appInputFormatter = 'fullname';
  @Output() ngModelChange: EventEmitter<any> = new EventEmitter();
  @Output() afterValid: EventEmitter<any> = new EventEmitter();

  FOMATTER = {
    'fullname': {
      fn: (val) => (val.replace(/[^A-Za-z ]/g, '')
        .replace(/([A-Za-z])([A-Za-z]*)/g, (_v, $1, $2) => ($1.toUpperCase() + $2)))
    },
    'name': {
      fn: (val) => (val.replace(/[^A-Za-z]/g, '')
        .replace(/([A-Za-z])([A-Za-z]*)/g, (_v, $1, $2) => ($1.toUpperCase() + $2)))
    },
    'amount': {
      fn: (val) => (this.currencyPipe.transform(val.replace(/[^0-9]/g, ''), ' ', 'symbol', '0.0-0').trim())
    }
  };

  constructor(public currencyPipe: CurrencyPipe) {
  }

  @HostListener('input', ['$event']) onInputChange($event) {
    if (/[^A-Za-z ]/g.test($event.target.value)) {
      this.afterValid.emit(false);
    } else {
      this.afterValid.emit(true);
    }
    /* $event.target.value = $event.target.value.replace(/[^A-Za-z ]/g, '')
      .replace(/([A-Za-z])([A-Za-z]*)/g, (val, $1, $2) => ($1.toUpperCase() + $2)); */
    $event.target.value = this.FOMATTER[this.appInputFormatter] && this.FOMATTER[this.appInputFormatter].fn($event.target.value);
    this.ngModelChange.emit($event.target.value);
  }



}
