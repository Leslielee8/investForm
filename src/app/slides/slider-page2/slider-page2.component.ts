import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SwiperManagerService } from 'src/app/service/swiper-manager.service';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-slider-page2',
  templateUrl: './slider-page2.component.html',
  styleUrls: ['./slider-page2.component.scss']
})
export class SliderPage2Component implements OnInit {
  @ViewChild('myForm') myForm: NgForm;
  @Input() data;
  @ViewChild('placesRef') placesRef: GooglePlaceDirective;
  constructor(public swiperManager: SwiperManagerService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.data);
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
