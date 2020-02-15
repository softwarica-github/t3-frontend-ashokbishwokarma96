import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { AlertMessageService } from '@dashboard/shared/services/alert-message.service';
import { columnsList } from '../cols.table';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
data;
filterField;
filterText;
columnList;
link="/dashboard/customer/create";
  constructor(private service:CustomerService,private alertService: AlertMessageService) { }

  ngOnInit() {
    this.getData();
    this.getFilterField();
    this.getColumn();
    this.service.getMessage.subscribe(
      () => {
          this.getData();
      }
    );
  }
getColumn():void{
  this.columnList=columnsList;
}

  search($event : KeyboardEvent){
    console.log(this.filterText);
}

getFilterField():void{
  this.filterField = [
    'name'
  ];
}

  getData():void{
this.service.get().subscribe(
  data=>{
    console.log(data);
  this.data=data;
      }
    );
  }

  delete(id:any):void{
    this.service.delete(id).subscribe(
      data=>{
         this.alertService.show({
          message: data['message'],
          alertType: "success"
         })
          this.service.setMessage(true);

      }   
    )
  }
}
