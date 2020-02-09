import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
@Input() column;
@Input() datas;
@Input() filterField;
@Input() filterText;
@Input() editlink;
@Input() mode:boolean=false;
@Input() custMode:boolean=false;
@Input() cartMode:boolean=false;
@Output() setID:EventEmitter<number>= new EventEmitter();
p: number = 1;
perpage=3;

  constructor(private router:Router) { }

  ngOnInit() {
    // this.perpage=this.mode?3:12;
  }
 
passId(id:number):void{
  this.setID.emit(id);
}
edit(id:number):void{
  let uri=this.editlink.substr(0, (this.editlink.length - 6));
  console.log(uri);
  this.router.navigateByUrl(uri+id+'/edit');
  }
}
