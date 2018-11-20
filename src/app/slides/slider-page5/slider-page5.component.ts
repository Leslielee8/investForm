import { Component, OnInit, Input } from '@angular/core';
import { SwiperManagerService } from 'src/app/service/swiper-manager.service';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-slider-page5',
  templateUrl: './slider-page5.component.html',
  styleUrls: ['./slider-page5.component.scss']
})
export class SliderPage5Component implements OnInit {
  @Input() data;
  public config: DropzoneConfigInterface = {
    // clickable: true,
    maxFiles: 1,
    autoReset: null,
    errorReset: null,
    cancelReset: null,
    autoProcessQueue: true,
    addRemoveLinks: false
  };

  constructor(public swiperManager: SwiperManagerService) { }

  ngOnInit() {
  }

  public onUploadError(args: any): void {
    console.log('onUploadError:', args);
  }

  public onUploadSuccess(args: any): void {
    console.log('onUploadSuccess:', args);
  }
}
