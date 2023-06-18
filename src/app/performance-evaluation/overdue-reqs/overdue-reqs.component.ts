import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { OverdueService } from './overdue.service';

@Component({
  selector: 'app-overdue-reqs',
  templateUrl: './overdue-reqs.component.html',
  styleUrls: ['./overdue-reqs.component.css']
})
export class OverdueReqsComponent implements OnInit{
  @ViewChild('overDueScroll') scrollContainer!: ElementRef;

  responseData = [];
  constructor(private service: OverdueService){}

  ngOnInit(): void {
    setTimeout(() => {
     this.getMasterData();
    });
  }

  getMasterData(){
    this.service.getOverdueData().subscribe(res=>{
      this.responseData = res;
    })
  }

  startScrollLeft(): void {
    
    this.scrollContainer.nativeElement.scrollLeft -= 100; 
  }

  startScrollRight(): void {
    
    this.scrollContainer.nativeElement.scrollLeft += 100; 
  
  }
}
