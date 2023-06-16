import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformanceEvaluationRoutingModule } from './performance-evaluation-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PerformanceEvaluationRoutingModule
  ]
})
export class PerformanceEvaluationModule { }
