import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable, Subscription, timer } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpManagerService } from './http-manager.service';
import { SwiperManagerService } from './swiper-manager.service';
@Injectable({
  providedIn: 'root'
})
export class FormService {
  // investorId: any = 'KjZZ2zZoyog';
  // data = new Hero();
  _timer: Subscription;
  _cache;
  constructor(private httpManager: HttpManagerService, private swiperManager: SwiperManagerService) { }

  doComplete(data): Observable<any> {
    this._cache = Object.assign({}, data);
    this._cache.deposit_amount = String(this._cache.deposit_amount).replace(/,/g, '');
    this._cache.date_of_birth = moment(this._cache.date_of_birth).format('YYYYMMDD');
    // this._cache.id = data.id || 'KjZZ2zZoyog';
    return this.httpManager.doPost(environment.domain + 'services/process-investor.php', new HttpParams({
      fromObject: this._cache
    })).pipe(map((r: any) => {
      if (r.success) {
        data.id = r['investor_form_id'];
        // this.investorId = r['investor_form_id'];
        if (data.current_page === 'Finished' && r.send_pdf_cmd) {
          this.httpManager.doGet(environment.domain + r.send_pdf_cmd).subscribe();
        }
      }
      return r;
    }));
  }

  initData(id): Observable<any> {
    return this.httpManager.doGet(environment.domain + `services/get-investor.php?id=${id}`);
  }

  startTimer(data) {
    console.log('Timer', data);
    const _t = timer(5000, 10000).pipe(mergeMap(() => this.doComplete(data)));
    if (!this._timer && this.swiperManager.directiveRef.getIndex() > 1) {
      this._timer = _t.subscribe();
    }
    // return timer(5000, 10000).pipe(mergeMap(() => this.doComplete(data)));
  }

  stopTimer() {
    if (this._timer) {
      this._timer.unsubscribe();
    }
  }
}
