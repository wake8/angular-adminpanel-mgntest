import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformanceEvaluationRoutingModule } from './performance-evaluation-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReviewCycleComponent } from './review-cycle/review-cycle.component';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    ReviewCycleComponent
  ],
  imports: [
    CommonModule,
    PerformanceEvaluationRoutingModule,
    MaterialComponentsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class PerformanceEvaluationModule { }
