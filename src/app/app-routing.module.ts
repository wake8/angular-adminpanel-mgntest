import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "performance-evaluation", pathMatch: "full" },
  {
    path: "performance-evaluation",
    loadChildren: () => import('./performance-evaluation/performance-evaluation.module')
      .then((m) => m.PerformanceEvaluationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
