import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-download-application-form-model',
  templateUrl: './download-application-form-model.component.html',
  styleUrls: ['./download-application-form-model.component.scss']
})
export class DownloadApplicationFormModelComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

}
