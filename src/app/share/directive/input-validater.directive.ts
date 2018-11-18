import { Directive, Host, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appInputValidater]'
})
export class InputValidaterDirective {
  ngControl: NgControl;

  constructor(@Host() ngControl: NgControl) { this.ngControl = ngControl; }

  @HostListener('input', ['$event']) onInput(event: any) {
    if (this.ngControl.control) {
      this.ngControl.control.markAsPending();
    }
  }

  @HostListener('focus', ['$event']) onFocus(event: any) {
    if (this.ngControl.control) {
      this.ngControl.control.markAsPending();
    }
  }


  @HostListener('blur', ['$event']) onBlur(event: any) {
    if (this.ngControl.control) {
      this.ngControl.control.updateValueAndValidity();
    }
  }
}
