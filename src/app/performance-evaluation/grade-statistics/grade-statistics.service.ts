import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradeStatisticsService {

  constructor(private _http: HttpClient) { }

  public getGradeData(): Observable<any>{
    let url = 'assets/data/grade-stats.json'
    return this._http.get(url);
  }

  public getOveralGrades(): Observable<any>{
    let url = 'assets/data/overal-grades.json';
    return this._http.get(url);
  }
}
