import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OverdueService {

  constructor(private _http: HttpClient) { }

  getOverdueData(): Observable<any> {
    let url = 'assets/data/request-data.json'
    return this._http.get(url);
  }
  
}
