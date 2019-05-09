import { Directive, Host, HostListener, Output, EventEmitter, Input, ElementRef } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { timer } from 'rxjs';

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
      fn: (val) => ((this.currencyPipe.transform(val.replace(/[^0-9]/g, ''), ' ', 'symbol', '0.0-0') || '').trim())
    },
    'phone': {
      fn: (val) => {
        const value = val.replace(/[^0-9]/g, '');
        if (value) {
          if (value.match(/^\b04/)) {
            return value.replace(/^([0-9]{4}) ?([0-9]{3}) ?([0-9]{3}).*$/, '$1 $2 $3');
          } else if (value.match(/^\b0/)) {
            return value.replace(/^([0-9]{2}) ?([0-9]{4}) ?([0-9]{4}).*$/, '$1 $2 $3');
          } else if (value.match(/^[1-9][0-9 ]{7}/)) {
            return value.replace(/^([1-9][0-9]{3}) ?([0-9]{4}).*$/, '$1 $2');
          }
        }
        return value;
      }
    }
  };

  constructor(public currencyPipe: CurrencyPipe, public elementRef: ElementRef) {
    const sub = timer(0, 500).subscribe(r => {
      this.elementRef.nativeElement.value = this.FOMATTER[this.appInputFormatter]
        && this.FOMATTER[this.appInputFormatter].fn(this.elementRef.nativeElement.value);
      // $event.target.value = this.FOMATTER[this.appInputFormatter] && this.FOMATTER[this.appInputFormatter].fn($event.target.value);
      // console.log(this.elementRef.nativeElement.value);
      this.ngModelChange.emit(this.elementRef.nativeElement.value);
      if (this.elementRef.nativeElement.value) {
        sub.unsubscribe();
      }
    });
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
