import { Injectable } from '@angular/core';
import { HttpManagerService } from './http-manager.service';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private httpManager: HttpManagerService) { }

  doComplete(data): Observable<any> {
    data.deposit_amount = data.deposit_amount.replace(/,/g, '');
    data.date_of_birth = moment(data.date_of_birth).format('YYYYMMDD');
    return this.httpManager.doPost(environment.domain + '/services/process-investor.php', new HttpParams({
      fromObject: data
    }));
  }
}
