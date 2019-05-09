import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SwiperManagerService } from 'src/app/service/swiper-manager.service';
import { environment } from 'src/environments/environment';
// import { DropzoneConfigInterface, DropzoneComponent } from 'ngx-dropzone-wrapper';
declare const Dropzone;
Dropzone.options.formDropzone = {
  paramName: 'file',
  autoProcessQueue: true,
  uploadMultiple: true, // uplaod files in a single request
  addRemoveLinks: false,
  dictDefaultMessage: 'Drop files here to upload your Driver Licence or Passport',
};
@Component({
  selector: 'app-slider-page5',
  templateUrl: './slider-page5.component.html',
  styleUrls: ['./slider-page5.component.scss']
})
export class SliderPage5Component implements OnInit {
  @Input() data;
  // public config: DropzoneConfigInterface;
  @Input() dropZoneConfig;
  dropzoneUrl: string;
  // @ViewChild(DropzoneComponent) componentRef?: DropzoneComponent;
  constructor(public swiperManager: SwiperManagerService) { }

  ngOnInit() {
    /* this.config = {
      // clickable: true,
      maxFiles: 1,
      autoReset: null,
      errorReset: null,
      cancelReset: null,
      autoProcessQueue: true,
      addRemoveLinks: false,
      url: `https://www.maxironwealth.com.au/develop2/services/process-dropzone.php?investor-form-id=${this.data.id}`
    }; */
    // const myDropzone = new Dropzone('div#myDropzone', { url: '/file/post'});
    this.dropzoneUrl = environment.domain + 'services/process-dropzone.php';
    const myDropzone = new Dropzone('form#form-dropzone', { url: this.dropzoneUrl});
  }

  amount() {
    return this.data.deposit_amount && String(this.data.deposit_amount).replace(/[^0-9.]/g, '');
  }
}
