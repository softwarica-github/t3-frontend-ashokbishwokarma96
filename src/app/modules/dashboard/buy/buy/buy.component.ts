import { Component, OnInit } from '@angular/core';
import { BuyService } from '../service/buy.service';
import { AlertMessageService } from '@dashboard/shared/services/alert-message.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ProductService } from '@dashboard/dashboard/product/service/product.service';
import { CartService } from '@dashboard/dashboard/cart/service/cart.service';


@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
data;
filterField;
filterText;
dataForm:FormGroup
  constructor(private service:BuyService,private productService:ProductService,private alertService: AlertMessageService,private fb:FormBuilder) { }

  ngOnInit() {
    this.getData();
    this.createform();
    this.service.getMessage.subscribe(
      () => {
          this.getData();
      }
    );
   
  }
  setQuantity(data){
    this.dataForm.patchValue({
      quantity:data.target.value
    })
  }
createform(){
  this.dataForm = this.fb.group({
    productName: ['',Validators.required],
    productPrice: ['',Validators.required],
    productImage: [''],
    quantity:['',Validators.required],
    userEmail:['']
});
}


  getData():void{
this.service.get().subscribe(
  data=>{
    console.log(data);
  this.data=data;
      }
    );
  }

  search($event : KeyboardEvent){
    console.log(this.filterText);
}

getFilterField():void{
  this.filterField = [
    'productName'
  ];
}

  onSubmit($id){
this.productService.getByID($id).subscribe((res)=>{
  console.log(this.dataForm.value.quantity)
  this.dataForm.setValue({
    productName:res.productName,
    productPrice:res.productPrice,
    productImage:res.productImage,
    userEmail:localStorage.getItem('email'),
    quantity:this.dataForm.value.quantity
  })
this.service.addOrder(this.dataForm.value).subscribe((res)=>{
  this.alertService.show({
    message: "Buy successful",
    alertType: "success"
   })});
})
  }

}
