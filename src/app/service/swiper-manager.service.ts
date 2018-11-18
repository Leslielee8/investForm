import { Injectable } from '@angular/core';
import { SwiperDirective } from 'ngx-swiper-wrapper';

@Injectable({
  providedIn: 'root'
})
export class SwiperManagerService {
  public directiveRef: SwiperDirective;
  constructor() { }

  nextSlide() {
    this.directiveRef.nextSlide();
  }

  prevSlide() {
    this.directiveRef.prevSlide();
  }

}
