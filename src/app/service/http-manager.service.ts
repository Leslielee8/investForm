import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpManagerService {

  constructor(private http: HttpClient) { }

  doGet(url): Observable<any> {
    return this.http.get(url);
  }

  doPost(url, params): Observable<any> {
    return this.http.post(url, params, { responseType: 'json' });
  }
}
