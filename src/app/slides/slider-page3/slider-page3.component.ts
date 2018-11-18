import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Hero } from 'src/app/entity/hero';
import { SwiperManagerService } from 'src/app/service/swiper-manager.service';
import { NouisliderComponent } from 'ng2-nouislider';

@Component({
  selector: 'app-slider-page3',
  templateUrl: './slider-page3.component.html',
  styleUrls: ['./slider-page3.component.scss']
})
export class SliderPage3Component implements OnInit {
  @Input() data: Hero;
  displaySlider = false;
  RATE = [
    {
      terms: '3 - 9 Months',
      rate: 0.0699,
      check: false,
      range: {
        min: 3,
        max: 9
      },
      displaySlider: true
    },
    {
      terms: '12 - 24 Months',
      rate: 0.0869,
      check: false,
      range: {
        min: 12,
        max: 24
      },
      displaySlider: true
    },
    {
      terms: '36 Months',
      rate: 0.1023,
      check: false,
      range: {
        min: 0,
        max: 36
      },
      displaySlider: false
    }
  ];

  someKeyboardConfig: any = {
    /*  connect: true,
     start: [400, 500],
     step: 10,
     range: {
       min: 360,
       max: 1080
     },
     behaviour: 'drag', */
    behaviour: 'drag',
    connect: true,
    start: 3,
    keyboard: true,
    step: 1,
    pageSteps: 10,  // number of page steps, defaults to 10
    range: {
      min: 3,
      max: 9
    },
    /* pips: {
      mode: 'count',
      density: 1,
      values: 7,
      stepped: true
    } */
    pips: {
      mode: 'steps',
      density: 3,
    }
  };

  @ViewChild('nouislider') nouislider: NouisliderComponent;

  constructor(public swiperManager: SwiperManagerService) { }

  ngOnInit() {
  }

  onTermClick(rate) {
    this.data.annual_rate = rate.rate;
    this.RATE.map(r => {
      r.check = false;
    });
    rate.check = true;
    this.someKeyboardConfig.range = rate.range;
    console.log(this.nouislider, rate);
    this.nouislider.slider.updateOptions({
      range: rate.range,
      start: rate.range.min
    });
    this.displaySlider = rate.displaySlider;
    this.swiperManager.directiveRef.update();
  }

  calc(amount: string, rate: number) {
    return amount && Number(amount.replace(/[,]/g, '')) * rate;
  }

  onSubmit() {
    this.swiperManager.nextSlide();
  }
}
