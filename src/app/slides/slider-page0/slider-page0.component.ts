import { Component, OnInit } from '@angular/core';
import { SwiperManagerService } from 'src/app/service/swiper-manager.service';
import { BsModalService } from 'ngx-bootstrap';
import { DownloadApplicationFormModelComponent } from './download-application-form-model/download-application-form-model.component';

@Component({
  selector: 'app-slider-page0',
  templateUrl: './slider-page0.component.html',
  styleUrls: ['./slider-page0.component.scss']
})
export class SliderPage0Component implements OnInit {

  constructor(public swiperManager: SwiperManagerService, private modalService: BsModalService) { }

  ngOnInit() {
  }

  openPDS() {
    window.open('https://www.maxironwealth.com.au/pds');
  }

  openDownloadAppFormDialogue() {
    this.modalService.show(DownloadApplicationFormModelComponent);
  }
}
