import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { AppComponent } from './app.component';
import { SecureSafeComponent } from './secure-safe/secure-safe.component';
import { ShareModule } from './share/share.module';
import { SliderPage1Component } from './slides/slider-page1/slider-page1.component';
import { SliderPage2Component } from './slides/slider-page2/slider-page2.component';
import { BsDatepickerModule, ModalModule } from 'ngx-bootstrap';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { SliderPage3Component } from './slides/slider-page3/slider-page3.component';
import { CurrencyPipe, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { SliderPage4Component } from './slides/slider-page4/slider-page4.component';
import { UiSwitchModule } from 'ngx-ui-switch';
import { NouisliderModule } from 'ng2-nouislider';
import { SliderPage5Component } from './slides/slider-page5/slider-page5.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SliderPage0Component } from './slides/slider-page0/slider-page0.component';
import { SubmissionModalComponent } from './slides/slider-page4/submission-modal/submission-modal.component';
// tslint:disable-next-line:max-line-length
import { DownloadApplicationFormModelComponent } from './slides/slider-page0/download-application-form-model/download-application-form-model.component';
import { ProgressbarModule } from 'ngx-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    SecureSafeComponent,
    SliderPage1Component,
    SliderPage2Component,
    SliderPage3Component,
    SliderPage4Component,
    SliderPage5Component,
    LayoutComponent,
    SliderPage0Component,
    SubmissionModalComponent,
    DownloadApplicationFormModelComponent,
  ],
  imports: [
    RouterModule.forRoot([]),
    AppRoutingModule,
    GooglePlaceModule,
    BrowserModule,
    SwiperModule,
    ShareModule,
    FormsModule,
    HttpClientModule,
    PopoverModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    UiSwitchModule.forRoot({
      size: 'small',
      color: '#f7ab1b',
      switchColor: '#f7ab1b',
      defaultBgColor: '#fff',
      defaultBoColor: '#f7ab1b',
      checkedLabel: 'Yes',
      uncheckedLabel: 'No'
    }),
    NouisliderModule,
    ProgressbarModule.forRoot()
    // DropzoneModule
  ],
  entryComponents: [
    SubmissionModalComponent,
    DownloadApplicationFormModelComponent
  ],
  providers: [
    CurrencyPipe,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    /* {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    } */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
