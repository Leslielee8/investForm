import { Component, Input, OnInit, ViewChild, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { SwiperManagerService } from 'src/app/service/swiper-manager.service';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { FormService } from 'src/app/service/form.service';
@Component({
  selector: 'app-slider-page2',
  templateUrl: './slider-page2.component.html',
  styleUrls: ['./slider-page2.component.scss']
})
export class SliderPage2Component implements OnInit, OnChanges {
  @ViewChild('myForm') myForm: NgForm;
  @Input() data;
  @ViewChild('placesRef') placesRef: GooglePlaceDirective;
  isPostalAddress = true;
  options = {
    types: [],
    componentRestrictions: {
      country: 'au'
    },
  };
  day = null;
  month = null;
  year = null;
  years = [];
  constructor(public swiperManager: SwiperManagerService, private formService: FormService) { }

  ngOnInit() {
    const _start = moment().add(-18, 'year').get('year');
    for (let i = 0, j = 58; i < j; i++) {
      this.years.push(_start - i);
    }
    /* if (!environment.production) {
      this.day = 1;
      this.month = 1;
      this.year = 1950;
    } */

  }

  ngOnChanges() {
    if (this.data.date_of_birth) {
      const _date = moment(this.data.date_of_birth);
      this.day = _date.get('date');
      this.month = _date.get('month') + 1;
      this.year = _date.get('year');
      console.log(this.data.date_of_birth, this.day, this.month, this.year);
    }
  }
  isPostalAddressChange(event) {
    // this.data.postal_address = event ? this.data.residential_address : '';
    this.isPostalAddress = event;
    this.data.postal_address = this.isPostalAddress ? this.data.residential_address : '';
    this.swiperManager.update();
  }

  onResidentialAddressInput(event) {
    if (this.isPostalAddress) {
      this.data.postal_address = this.data.residential_address;
    }
  }

  DOB() {
    if (this.year && this.month && this.day) {
      this.data.date_of_birth = moment().set('year', this.year).set('month', this.month - 1).set('date', this.day).toDate();
    }
  }

  onSubmit() {
    Object.keys(this.myForm.controls).map(key => {
      this.myForm.controls[key].updateValueAndValidity();
    });
    if (this.myForm.form.invalid) {
      Object.keys(this.myForm.controls).map(key => {
        this.myForm.controls[key].markAsTouched();
      });
      this.swiperManager.update();
    } else {
      this.data.date_of_birth = moment().set('year', this.year).set('month', this.month - 1).set('date', this.day).toDate();
      console.log(this.data);
      this.formService.doComplete(this.data).subscribe(() => {
        this.swiperManager.nextSlide();
      });
    }
  }
}
