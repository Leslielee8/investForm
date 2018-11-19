import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SwiperManagerService } from 'src/app/service/swiper-manager.service';
import { Hero } from 'src/app/entity/hero';
import { FormService } from 'src/app/service/form.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-slider-page4',
  templateUrl: './slider-page4.component.html',
  styleUrls: ['./slider-page4.component.scss']
})
export class SliderPage4Component implements OnInit {
  @Input() data;
  @ViewChild('myForm') myForm: NgForm;

  isAgree;
  constructor(public swiperManager: SwiperManagerService, private formServie: FormService) { }

  ngOnInit() {
  }

  isShowText() {
    return this.data.deposit_amount && Number(this.data.deposit_amount.replace(/[,]/g, '')) <= 500000;
  }

  complete() {
    if (this.myForm.form.invalid) {
      Object.keys(this.myForm.controls).map(key => {
        this.myForm.controls[key].markAsTouched();
      });
    } else {
      this.formServie.doComplete(this.data).subscribe(r => {
        console.log(r);
        if (r.success) {
          this.swiperManager.nextSlide();
        }
      });
    }
  }
}
