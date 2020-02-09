import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { SortModule } from '../sort/sort.module';
import { PipeModule } from '../pipe/pipe.module';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    SortModule,
    PipeModule,
    NgxPaginationModule
  ],
  exports:[
    TableComponent
  ]
})
export class TableModule { }
