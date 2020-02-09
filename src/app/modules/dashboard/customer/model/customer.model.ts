export class Customer {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public phone: string,
        public password: string,
        public userImage: string,
        public admin:string
        ){}
    }
      

//         name: {
//             type: String,
//             reqired: true
//   },
//   email: {
//             type: String,
//             reqired: true,
//             unique: true
//   },
//   phone: {
//             type: Number,
//             reqired: true,
//             unique: true
//   },

//   password: {
//             type: String,
//             reqired: true
//   },
//   image: {
//             type: String
            
//   },
//   admin:{
//             type:Boolean,
//             default:false
//   }

export class ImageSnippet {
    constructor(
        public src: string,
         public file: File) 
         {
  
         }
  }