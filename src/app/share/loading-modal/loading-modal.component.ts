import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-loading-modal',
  templateUrl: './loading-modal.component.html',
  styleUrls: ['./loading-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoadingModalComponent implements OnInit {
  value = 100;
  constructor() { }

  ngOnInit() {
    /* timer(0, 50).subscribe(() => {
      this.value++;
      if (this.value === 100) {
        this.value = 0;
      }
      console.log(this.value);
    }); */
  }

}
