export class Cart {
    constructor(
        public id: string,
        public userEmail: string,
        public productImage: string,
        public productName: string,
        public productPrice: string,
        public quantity: string

//         userEmail: {
//             type: String,
//             reqired: true,
//   },
//   productImage: {
//             type: String,
//             required: false
//   },
//   productName: {
//             type: String,
//             required: true
//   },
//   productPrice: {
//             type: Number,
//             required: true
//   },
//   quantity: {
//             type: Number,
//             required:true
//   }    
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