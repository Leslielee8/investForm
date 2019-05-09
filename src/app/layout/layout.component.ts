import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SwiperManagerService } from '../service/swiper-manager.service';
import { ActivatedRoute } from '@angular/router';
import { SwiperDirective } from 'ngx-swiper-wrapper';
import { Hero } from '../entity/hero';
import { FormService } from '../service/form.service';
import { LoadingService } from '../service/loading.service';
declare const Dropzone;
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ViewChild(SwiperDirective) directiveRef?: SwiperDirective;
  title = 'investForm';
  config = {
    direction: 'horizontal',
    loop: false,
    autoHeight: true,
    allowTouchMove: false,
  };
  data = new Hero();
  index = 0;
  /* dropZoneConfig: DropzoneConfigInterface = {
    // clickable: true,
    maxFiles: 0,
    autoReset: null,
    errorReset: null,
    cancelReset: null,
    autoProcessQueue: false,
    addRemoveLinks: false,
    paramName: 'file',
  }; */

  constructor(private swiperManager: SwiperManagerService, private activedRouter: ActivatedRoute
    , private formService: FormService, private loadingService: LoadingService) {
    // setTheme('bs3');

  }

  ngOnInit(): void {
    // this.directiveRef.nextSlide();
    this.swiperManager.directiveRef = this.directiveRef;
    // this.data = this.formService.data;
    // this.directiveRef
   /*  if (!environment.production) {
      this.index = 0;
      this.data = {
        id: 'KjZZ2zZoyog',
        full_name: 'Leslie Lee',
        first_name: 'Leslie',
        last_name: 'Lee',
        email: 'Leslielee888888@gmail.com',
        mobile: '0416522365',
        residential_address: 'a',
        postal_address: 'a',
        date_of_birth: new Date(),
        deposit_amount: Math.floor(Math.random() * 10000) + 5000,
        annual_rate: 0.0699,
        monthly_earning: 550,
        term: 12,
        is_tax_resident_of_australia: 1,
        prefer_receive_doc_by_email: 1,
        is_not_politically_exposed_person: 1,
        politically_exposed_person_detail: 'I am a tester.',
        tax_file_number: 5123123,
        account_holder: '1',
        bsb: '1',
        account_number: '1',
        reference: '1',
        sign_name: 'Leslie Lee',
        current_page: this.swiperManager.directiveRef.getIndex().toString()
      };
      console.log(this.data);
    } */
    this.activedRouter.params.subscribe(r => {
      console.log(r);
      if (r.id) {
        this.data.id = r.id;
        this.loadingService.show();
        this.formService.initData(this.data.id).subscribe(_r => {
          if (_r.success) {
            // this.data = Object.assign(this.data, _r['investor-info']);
            this.data = _r['investor-info'];
            const index = _r['investor-info'].current_page === 'Finished' ? 5 : _r['investor-info'].current_page;
            this.swiperManager.directiveRef.setIndex(index, 0, true);
            this.loadingService.hide();
            /* Dropzone.options.formDropzone = {
              paramName: 'file',
              autoProcessQueue: true,
              uploadMultiple: true, // uplaod files in a single request
              addRemoveLinks: false,
              dictDefaultMessage: 'Drop files here to upload your Driver Licence or Passport',
            }; */
          }
        });
      }
    });
  }

  nextSlide() {
    this.directiveRef.nextSlide();
  }

  afterComplete(id) {
    // this.dropZoneConfig.url = `https://www.maxironwealth.com.au/develop2/services/process-dropzone.php?investor-form-id=${id}`;
  }

  indexChange(index) {
    this.data.current_page = index;
    window.scrollTo(0, 0);
  }


  @HostListener('keyup') onkeyup() {
    this.formService.startTimer(this.data);
  }

  @HostListener('mousedown') onMousedown() {
    this.formService.startTimer(this.data);
  }
}
