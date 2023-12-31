import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ReviewCycleService } from './review-cycle.service';
import { FormControl } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-review-cycle',
  templateUrl: './review-cycle.component.html',
  styleUrls: ['./review-cycle.component.css']
})
export class ReviewCycleComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('scrollcontainer') scrollContainer!: ElementRef;

  responseData: ReviewData[] = [];
  categoryList!: string[];
  originalData: ReviewData[] = [];
  dataLoaded = false;
  pageSize = 4;
  pageEvent: any;
  CN: any;
  init = false;
  searchCards = new FormControl(['']);

  destroy = new Subject();
  cnId;
  


  constructor(private reviewService: ReviewCycleService) { }

  ngAfterViewInit(): void {
    this.cnId = document.getElementById('CN');
  }

  ngOnInit() {
    this.getMasterData();

    this.searchCards.valueChanges.pipe(takeUntil(this.destroy)).subscribe((val) => {
      console.log("val: ", val)

      this.responseData = this.originalData.filter(rec => {
        return val?.includes(rec['reviewStatus']);
      });

    })
  }

  ngOnDestroy() {
    this.destroy.next(0);
    this.destroy.complete();
    this.destroy.unsubscribe();
  }
 
  selectAll() {

    this.searchCards.setValue(this.categoryList, { emitEvent: false })
    this.responseData = this.originalData;
  }

  changeSelection(data){
    if(data['selectAll']){
      this.responseData = this.originalData;
    }else{
      let val = data['list'];
      this.responseData = this.originalData.filter(rec => {
        return val?.includes(rec['reviewStatus']);
      });
    }
  }

  checkHiddenCN() {

    let elem = document.getElementById('CN');
    const rect = elem?.getBoundingClientRect();
    return (
      rect &&
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  getMasterData() {
    this.reviewService.getEmpData().subscribe(res => {
      this.responseData = res;
      if (res) {
        this.categoryList = [];
        let catSet = new Set<string>();
        res.forEach((record: ReviewData) => {
          record['participants'] = this.shuffledData(record['participants']);
          catSet.add(record['reviewStatus']);

          let completed = 0;
          let pending = 0;
          let reuests = 0;
          record['participants'].forEach(emp => {
            if (emp['status'] && emp['status'] == 'y') { //if status not available consider as overdue or pending
              completed += 1;
            } else {
              pending += 1
            }


            if (emp['requestStatus'] && emp['requestStatus'] == 'y') {
              reuests += 1
            }

          })
          if (!pending) {
            record['isCompleted'] = true;
          } else {
            record['completionFigure'] = completed + "/" + pending;

          }
          if (!record['isCompleted']) {// if not completed then only we need other figures
            record['overdue'] = pending?.toString();
            record['requests'] = reuests?.toString();
          }
        })
        this.categoryList = Array.from(catSet);
        this.responseData = res;
        this.originalData = Array.from(res);

        setTimeout(() => {
          this.searchCards.setValue(this.categoryList, { emitEvent: false });
        });
      }
      // console.log(res);
      this.dataLoaded = true;

    });

  }

  shuffledData(ar: Emp[]) {
    return ar?.sort(() => Math.random() - 0.5);
  }

  getCounter(size: any) {

    if (size > 4) {
      return size - 4;
    } else if (length < 4) {
      return 4 - size;
    } else {
      return 0
    }

  }

  scrollTimeout: any;

  startScrollLeft(): void {

    this.scrollContainer.nativeElement.scrollLeft -= 100;
  }

  startScrollRight(): void {

    this.scrollContainer.nativeElement.scrollLeft += 100;

  }


}

export interface Emp {
  link: string,
  status: string,
  overdue: string,
  requestStatus: string,

}

export interface ReviewData {
  evalDate: string,
  evalDesc: string,
  participants: Emp[],
  reviewStatus: string,
  isCompleted: boolean
  completionFigure: string;
  overdue: string,
  requests: string

}