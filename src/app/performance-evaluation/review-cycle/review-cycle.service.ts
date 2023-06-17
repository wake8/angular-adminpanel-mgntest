import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewCycleService {

  constructor(private _http: HttpClient) { }

  getEmpData(): Observable<any>{
    let url = "assets/data/empdata.json"
    return this._http.get(url);
  }
}
