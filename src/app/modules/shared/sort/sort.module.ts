import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortDirective } from './sort';

@NgModule({
  declarations: [SortDirective],
  imports: [
    CommonModule
  ],
  exports:[
    SortDirective
  ]
})
export class SortModule { }
