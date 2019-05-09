import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NouisliderComponent } from 'ng2-nouislider';
import { SwiperManagerService } from 'src/app/service/swiper-manager.service';
import { FormService } from 'src/app/service/form.service';

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
      max: 6,
      rate: 0.0659
    },
    {
      min: 6,
      max: 12,
      rate: 0.0829
    },
    {
      min: 12,
      max: 24,
      rate: 0.0869
    },
    {
      min: 24,
      max: 26,
      rate: 0.0909
    },
    {
      min: 36,
      max: 999,
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
      'max': [36]
    },
    pips: {
      mode: 'values',
      values: [3, 6, 12, 24, 36],
      density: 4,
    }
  };

  @ViewChild('nouislider') nouislider: NouisliderComponent;
  @ViewChild('myForm') myForm: NgForm;
  term;
  constructor(public swiperManager: SwiperManagerService, private formService: FormService) { }

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
    const _rs = this.RATE.find(r => (this.data.term >= r.min && this.data.term < r.max));
    this.data.annual_rate = _rs.rate;
  }

  calc(amount: string, rate: number) {
    return amount && Number(String(amount).replace(/[,]/g, '')) * rate / 12;
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
      this.formService.doComplete(this.data).subscribe(() => {
        this.swiperManager.nextSlide();
      });
    }
  }
}
