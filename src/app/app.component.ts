import { Component, ViewChild, OnInit } from '@angular/core';
import { SwiperDirective } from 'ngx-swiper-wrapper';
import { Hero } from './entity/hero';
import { SwiperManagerService } from './service/swiper-manager.service';
import { setTheme } from 'ngx-bootstrap/utils';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(SwiperDirective) directiveRef?: SwiperDirective;
  title = 'investForm';
  config = {
    direction: 'horizontal',
    loop: false,
    autoHeight: true,
    allowTouchMove: false,
  };
  data = new Hero();

  constructor(private swiperManager: SwiperManagerService) {
    // setTheme('bs3');
  }

  ngOnInit(): void {
    // this.directiveRef.nextSlide();
    this.swiperManager.directiveRef = this.directiveRef;
  }

  nextSlide() {
    this.directiveRef.nextSlide();
  }
}
