import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFormatterDirective } from './directive/input-formatter.directive';
import { InputValidaterDirective } from './directive/input-validater.directive';

@NgModule({
  declarations: [
    InputFormatterDirective,
    InputValidaterDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputFormatterDirective,
    InputValidaterDirective
  ]
})
export class ShareModule { }
