import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewCycleService {

  commit1 = 'Hello there commit 1 simulation'
  otherDev= "hi there"

  constructor(private _http: HttpClient) { }


  getEmpData(): Observable<any>{
    let url = "assets/data/empdata.json"
    return this._http.get(url);
  }
}
