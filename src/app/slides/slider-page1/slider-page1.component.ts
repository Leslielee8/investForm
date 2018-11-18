import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SwiperManagerService } from 'src/app/service/swiper-manager.service';

@Component({
  selector: 'app-slider-page1',
  templateUrl: './slider-page1.component.html',
  styleUrls: ['./slider-page1.component.scss']
})
export class SliderPage1Component implements OnInit {
  @ViewChild('pop') popover;
  @ViewChild('myForm') myForm: NgForm;
  @Input() data;
  constructor(public swiperManager: SwiperManagerService) { }

  ngOnInit() {
  }

  afterValid(valid) {
    if (!valid) {
      this.popover.show();
    } else {
      this.popover.hide();
    }
  }

  onSubmit() {
    if (this.myForm.form.invalid) {
      Object.keys(this.myForm.controls).map(key => {
        this.myForm.controls[key].markAsTouched();
      });
    } else {
      this.swiperManager.nextSlide();
    }
  }
}
