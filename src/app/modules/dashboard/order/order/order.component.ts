import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';
import { AlertMessageService } from '@dashboard/shared/services/alert-message.service';
import { columnsList } from '../cols.table';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
data;
filterField;
filterText;
columnList;
link="/dashboard/order/create";
  constructor(private service:OrderService,private alertService: AlertMessageService) { }

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
    'productName'
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
