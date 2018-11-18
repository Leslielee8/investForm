import { Component, OnInit, Input } from '@angular/core';
import { SwiperManagerService } from 'src/app/service/swiper-manager.service';
import { Hero } from 'src/app/entity/hero';

@Component({
  selector: 'app-slider-page4',
  templateUrl: './slider-page4.component.html',
  styleUrls: ['./slider-page4.component.scss']
})
export class SliderPage4Component implements OnInit {
  @Input() data;
  isAgree;
  constructor(public swiperManager: SwiperManagerService) { }

  ngOnInit() {
  }

  isShowText() {
    console.log(this.data.deposit_amount);
    return this.data.deposit_amount && Number(this.data.deposit_amount.replace(/[,]/g, '')) <= 500000;
  }

  complete() {
    this.swiperManager.nextSlide();
  }
}
