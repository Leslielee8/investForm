import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SwiperManagerService } from 'src/app/service/swiper-manager.service';
import { Hero } from 'src/app/entity/hero';

@Component({
  selector: 'app-slider-page1',
  templateUrl: './slider-page1.component.html',
  styleUrls: ['./slider-page1.component.scss']
})
export class SliderPage1Component implements OnInit {
  @ViewChild('pop') popover;
  @ViewChild('myForm') myForm: NgForm;
  @Input() data: Hero;
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

  nameChange() {
    // console.log(this.data.full_name.match(/^[A-Za-z]*/), this.data.full_name.match(/ [A-Za-z]*$/));
    this.data.first_name = this.data.full_name.match(/^[A-Za-z]*/)[0];
    this.data.last_name = this.data.full_name
      && this.data.full_name.trim().match(/ [A-Za-z]*$/) && this.data.full_name.trim().match(/ [A-Za-z]*$/)[0].trim();
    // this.data.last_name = this.data.full_name.split(' ')[0];
  }

  onSubmit() {
    if (this.myForm.form.invalid) {
      Object.keys(this.myForm.controls).map(key => {
        this.myForm.controls[key].markAsTouched();
      });
      this.swiperManager.update();
    } else {
      this.swiperManager.nextSlide();
    }
  }
}
