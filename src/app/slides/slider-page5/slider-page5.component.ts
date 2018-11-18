import { Component, OnInit, Input } from '@angular/core';
import { SwiperManagerService } from 'src/app/service/swiper-manager.service';

@Component({
  selector: 'app-slider-page5',
  templateUrl: './slider-page5.component.html',
  styleUrls: ['./slider-page5.component.scss']
})
export class SliderPage5Component implements OnInit {
  @Input() data;

  constructor(public swiperManager: SwiperManagerService) { }

  ngOnInit() {
  }

}
