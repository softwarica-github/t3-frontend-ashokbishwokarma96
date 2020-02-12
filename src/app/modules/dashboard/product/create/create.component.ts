import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';
import { AlertMessageService } from '@dashboard/shared/services/alert-message.service';
import { ImageSnippet } from '../model/product.model';
import { FileHolder } from 'angular2-image-upload';
import { ProductImageService } from '../service/imageService.product';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  uniqueMsg;
  dataForm:FormGroup;
  submitted:boolean=false;
  extract;
  path;
  imagefile;
  button:string="Save";
  constructor(private fb:FormBuilder,
     private service:ProductService,
      private alertService:AlertMessageService,
      private imageService: ProductImageService,
      private router: Router) { }
  selectedFile: ImageSnippet;

  ngOnInit() {
    this.urlExtract();
    this.createForm();
    this.checkEdit();
  }

  urlExtract(): void {
    this.extract = this.router.url.split("/");
    this.path = this.extract[1] + '/' + this.extract[2] + '/' + this.extract[3];
}
  checkEdit(){
    if ("edit" == this.extract[this.extract.length - 1]) {
      let id = this.extract[this.extract.length - 2];
      this.service.getByID(id).subscribe(
          (data) => {
            console.log(data);
            this.button="Update";
              this.dataForm.setValue({
                    
                      productName: data.productName,
                      productCode: data.productCode,
                      productAvailability: data.productAvailability,
                      productPrice: data.productPrice,
                      materialUsed:data.materialUsed,
                      image:data.productImage ,
                      productQuantity:data.productQuantity,
                      productDescription:data.productDescription,
                      productMadeDate:data.productMadeDate
                  }
              );
          }
      );
    }
  }

  createForm(): void {
    this.dataForm = this.fb.group({
        productName: ['',Validators.required],
        productCode: ['',Validators.required],
        productAvailability: ['',Validators.required],
        productPrice: ['',Validators.required],
        materialUsed: ['',Validators.required],
        image: [''],
        productQuantity:['',Validators.required],
        productDescription:['',Validators.required],
        productMadeDate:['',Validators.required]
    });
  }
  get field() {
    return this.dataForm.controls;
  }

  onSubmit() {
    this.submitted=true;
    if(this.dataForm.valid){
      console.log(this.dataForm.value.image)
      const formData = new FormData();
      formData.append('productName', this.dataForm.value.productName);
      formData.append('productCode', this.dataForm.value.productCode);
      formData.append('productAvailability', this.dataForm.value.productAvailability);
      formData.append('productPrice', this.dataForm.value.productPrice);
      formData.append('materialUsed', this.dataForm.value.materialUsed);
      formData.append('image', this.imagefile);
      formData.append('productQuantity', this.dataForm.value.productQuantity);
      formData.append('productDescription', this.dataForm.value.productDescription);
      formData.append('productMadeDate', this.dataForm.value.productMadeDate);
      console.log(formData);
      // this.imageService.uploadImage(this.imagefile).subscribe(res=>{

        if(this.button==="Update"){
          let id = this.extract[this.extract.length - 2];
          this.service.update(formData,id).subscribe(
            (data:any) => {
              this.service.setMessage(true);
              this.router.navigateByUrl("/dashboard/product");
              this.success("Product updated successfully")
  
            }
        );
        
        }else{
         
          this.service.add(formData)
          .subscribe(
              (data:any) => {
                if(data['errorCode']===409){
    this.uniqueMsg=data['message'];
    return;
                }
                this.service.setMessage(true);
                this.router.navigateByUrl("/dashboard/product");
                this.success("Product created successfully")
              }
          );
        }
      // })
     
    }
  }
  onUploadFinished(file: FileHolder) {
    this.imagefile=file.file;
    console.log(this.imagefile)
      }
      
  //     onRemoved(file: FileHolder) {
  //       console.log(file);
  //     }
      
  //     onUploadStateChanged(state: boolean) {
  //       console.log(state);
  //     }
success(message):void{
  this.alertService.show({
    message: message,
    alertType: "success"
   })
}

}
