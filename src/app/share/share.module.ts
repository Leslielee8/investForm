import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFormatterDirective } from './directive/input-formatter.directive';
import { InputValidaterDirective } from './directive/input-validater.directive';
import { LoadingModalComponent } from './loading-modal/loading-modal.component';
import { ProgressbarModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    InputFormatterDirective,
    InputValidaterDirective,
    LoadingModalComponent
  ],
  imports: [
    CommonModule,
    ProgressbarModule
  ],
  exports: [
    InputFormatterDirective,
    InputValidaterDirective,
    LoadingModalComponent
  ],
  entryComponents: [
    LoadingModalComponent
  ]
})
export class ShareModule { }
