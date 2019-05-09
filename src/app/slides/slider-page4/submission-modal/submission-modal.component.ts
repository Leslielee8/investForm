import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormService } from 'src/app/service/form.service';
import { SwiperManagerService } from 'src/app/service/swiper-manager.service';
import { BsModalRef } from 'ngx-bootstrap';
import { timer } from 'rxjs';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-submission-modal',
  templateUrl: './submission-modal.component.html',
  styleUrls: ['./submission-modal.component.scss']
})
export class SubmissionModalComponent implements OnInit {
  @Input() data;
  @ViewChild('nameForm') nameForm: NgForm;
  constructor(private formServie: FormService, public swiperManager: SwiperManagerService, public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  Submit() {
    Object.keys(this.nameForm.controls).map(key => {
      this.nameForm.controls[key].updateValueAndValidity();
    });
    if (this.nameForm.form.invalid) {
      Object.keys(this.nameForm.controls).map(key => {
        this.nameForm.controls[key].markAsTouched();
      });
    } else {
      this.data.current_page = 'Finished';
      this.formServie.doComplete(this.data).subscribe(r => {
        if (r.success) {
          this.data.id = r['investor_form_id'];
          this.data.reference = r.reference;
          this.formServie.stopTimer();
          this.bsModalRef.hide();
          (window as any).ga('send', 'event', 'Button', 'Click', 'Completed Form');
          (window as any).gtag_report_conversion('https://www.maxironwealth.com.au/Form/#/' + r['investor_form_id']);
          window.location.href = 'https://www.maxironwealth.com.au/Form/#/' + r['investor_form_id'];
          /* if (window.location.href === 'https://www.maxironwealth.com.au/Form/#/' + r['investor_form_id']) {
            window.location.reload();
          } else {
            window.location.href = 'https://www.maxironwealth.com.au/Form/#/' + r['investor_form_id'];
          } */
          // window.location.reload();
          timer(500).subscribe(() => {
            this.swiperManager.nextSlide();
          });
        }
      });
    }
  }
}
