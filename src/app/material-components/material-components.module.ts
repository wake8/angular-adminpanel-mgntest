import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { NotFoundComponent } from '../common/not-found/not-found.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MultiSelectComponent } from '../common/custom-made-components/multi-select/multi-select.component';
import { DividerComponent } from '../common/custom-made-components/divider/divider.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    MultiSelectComponent,
    DividerComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
    MatCardModule,
    MatBadgeModule,
    MatIconModule,
    MatTabsModule,
    MatDividerModule,
    NotFoundComponent,
    MultiSelectComponent,
    DividerComponent,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule
  ]
})
export class MaterialComponentsModule { }
