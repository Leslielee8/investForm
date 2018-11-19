import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NouisliderComponent } from 'ng2-nouislider';
import { SwiperManagerService } from 'src/app/service/swiper-manager.service';

@Component({
  selector: 'app-slider-page3',
  templateUrl: './slider-page3.component.html',
  styleUrls: ['./slider-page3.component.scss']
})
export class SliderPage3Component implements OnInit {
  @Input() data;
  displaySlider = false;
  /* RATE = [
    {
      terms: '3 - 9 Months',
      rate: 6.99,
      check: false,
      range: {
        min: 3,
        max: 36
      },
      displaySlider: true
    },
    {
      terms: '12 - 24 Months',
      rate: 8.69,
      check: false,
      range: {
        min: 12,
        max: 24
      },
      displaySlider: true
    },
    {
      terms: '36 Months',
      rate: 10.23,
      check: false,
      range: {
        min: 0,
        max: 36
      },
      displaySlider: false
    }
  ]; */
  RATE = [
    {
      min: 3,
      max: 11,
      rate: 0.0699
    },
    {
      min: 12,
      max: 24,
      rate: 0.0869
    },
    {
      min: 36,
      max: 36,
      rate: 0.1023
    }
  ];
  someKeyboardConfig: any = {
    behaviour: 'drag',
    connect: true,
    start: 3,
    keyboard: true,
    step: 1,
    pageSteps: 10,  // number of page steps, defaults to 10
    range: {
      'min': [3],
      '95%': [24, 12],
      'max': [36]
    },
    pips: {
      mode: 'values',
      values: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 36],
      density: 4,
    }
  };

  @ViewChild('nouislider') nouislider: NouisliderComponent;
  @ViewChild('myForm') myForm: NgForm;
  term;
  constructor(public swiperManager: SwiperManagerService) { }

  ngOnInit() {
    this.data.term = 12;
    this.data.annual_rate = 0.0869;
  }

  /* onTermClick(i) {
    const rate = this.RATE[i];
    this.term = i;
    this.data.annual_rate = rate.rate;
    this.someKeyboardConfig.range = rate.range;
    this.nouislider.slider.updateOptions({
      range: rate.range,
      start: rate.range.min
    });
    this.swiperManager.directiveRef.update();
    if (i === 2) {
      this.data.term = 36;
    }
  } */

  onTermChange() {
    console.log(this.data.term);
    const _rs = this.RATE.find(r => (this.data.term >= r.min && this.data.term <= r.max));
    this.data.annual_rate = _rs.rate;
  }

  calc(amount: string, rate: number) {
    return amount && Number(amount.replace(/[,]/g, '')) * rate;
  }

  onSubmit() {
    console.log(this.myForm.controls.term.invalid);
    if (this.myForm.form.invalid) {
      Object.keys(this.myForm.controls).map(key => {
        this.myForm.controls[key].markAsTouched();
      });
    } else {
      this.swiperManager.nextSlide();
    }
  }
}
