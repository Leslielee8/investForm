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
import { BsDatepickerModule } from 'ngx-bootstrap';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { SliderPage3Component } from './slides/slider-page3/slider-page3.component';
import { CurrencyPipe } from '@angular/common';
import { SliderPage4Component } from './slides/slider-page4/slider-page4.component';
import { UiSwitchModule } from 'ngx-ui-switch';
import { NouisliderModule } from 'ng2-nouislider';
import { SliderPage5Component } from './slides/slider-page5/slider-page5.component';
@NgModule({
  declarations: [
    AppComponent,
    SecureSafeComponent,
    SliderPage1Component,
    SliderPage2Component,
    SliderPage3Component,
    SliderPage4Component,
    SliderPage5Component
  ],
  imports: [
    GooglePlaceModule,
    BrowserModule,
    SwiperModule,
    ShareModule,
    FormsModule,
    PopoverModule.forRoot(),
    BsDatepickerModule.forRoot(),
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
  ],
  providers: [
    CurrencyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
