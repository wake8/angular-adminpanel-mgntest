import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],

  exports: [
    MatCardModule,
    MatBadgeModule,
    MatIconModule
  ]
})
export class MaterialComponentsModule { }
