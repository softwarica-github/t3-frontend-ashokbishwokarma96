export class Product {
    constructor(
        public id: string,
        public productName: string,
        public productCode: string,
        public productAvailability: string,
        public productPrice: string,
        public productImage: string,
        public materialUsed:string,
        public productQuantity:string,
        public productDescription:string,
        public productMadeDate:string
    ) {

    }

}

export class ImageSnippet {
    constructor(
        public src: string,
         public file: File) 
         {
  
         }
  }