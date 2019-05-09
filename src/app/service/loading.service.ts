import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { LoadingModalComponent } from '../share/loading-modal/loading-modal.component';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  bsModalRef: BsModalRef;

  constructor(private bsModal: BsModalService) { }

  show() {
    this.bsModalRef = this.bsModal.show(LoadingModalComponent, {
      ignoreBackdropClick: true,
      class: 'loading-modal'
    });
  }

  hide() {
    timer(1000).subscribe(() => {
      this.bsModalRef.hide();
    });
  }
}
