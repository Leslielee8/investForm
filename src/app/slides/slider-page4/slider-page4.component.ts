import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { SwiperManagerService } from 'src/app/service/swiper-manager.service';
import { Hero } from 'src/app/entity/hero';
import { FormService } from 'src/app/service/form.service';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { BsModalService, ModalDirective } from 'ngx-bootstrap';
import { SubmissionModalComponent } from './submission-modal/submission-modal.component';

@Component({
  selector: 'app-slider-page4',
  templateUrl: './slider-page4.component.html',
  styleUrls: ['./slider-page4.component.scss']
})
export class SliderPage4Component implements OnInit {
  @Input() data;
  @ViewChild('myForm') myForm: NgForm;
  @Output() afterComplete = new EventEmitter<any>();
  isAgree;
  isAgreePDS;
  is_politically_exposed_person = 0;
  submission;

  constructor(public swiperManager: SwiperManagerService, private formService: FormService, private modalService: BsModalService) { }

  ngOnInit() {
    if (!environment.production) {
      this.isAgree = true;
      this.isAgreePDS = true;
    }
  }

  isShowText() {
    return this.data.deposit_amount && Number(String(this.data.deposit_amount).replace(/[,]/g, '')) <= 500000;
  }

  complete() {
    console.log(this.data);
    Object.keys(this.myForm.controls).map(key => {
      this.myForm.controls[key].updateValueAndValidity();
    });
    if (this.myForm.form.invalid) {
      Object.keys(this.myForm.controls).map(key => {
        this.myForm.controls[key].markAsTouched();
      });
      this.swiperManager.update();
    } else {
      /* this.formServie.doComplete(this.data).subscribe(r => {
        console.log(r);
        if (r.success) {
          this.data.id = r['investor_form_id'];
          this.data.reference = r.reference;
          this.afterComplete.emit(this.data.id);
          this.swiperManager.nextSlide();
        }
      }); */

      this.formService.doComplete(this.data).subscribe(() => {
        const initialState = { data: this.data };
        this.modalService.show(SubmissionModalComponent, { initialState });
      });
    }
  }

  openPSD() {
    window.open('https://www.maxironwealth.com.au/pds');
  }

  refresh() {
    this.data.is_not_politically_exposed_person = !this.is_politically_exposed_person;
    this.swiperManager.update();
  }

}
