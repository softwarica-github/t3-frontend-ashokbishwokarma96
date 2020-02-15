export class Cart {
    constructor(
        public id: string,
        public userEmail: string,
        public productImage: string,
        public productName: string,
        public productPrice: string,
        public quantity: string
  
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