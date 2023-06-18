import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverdueReqsComponent } from './overdue-reqs.component';

describe('OverdueReqsComponent', () => {
  let component: OverdueReqsComponent;
  let fixture: ComponentFixture<OverdueReqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverdueReqsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverdueReqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
