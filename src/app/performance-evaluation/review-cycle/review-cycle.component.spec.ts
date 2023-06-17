import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewCycleComponent } from './review-cycle.component';

describe('ReviewCycleComponent', () => {
  let component: ReviewCycleComponent;
  let fixture: ComponentFixture<ReviewCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewCycleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
