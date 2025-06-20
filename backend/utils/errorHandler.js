// // Error ust seviyye classdir
// // miras alma extends

// class ErrorHandler extends Error {
//     constructor(message, statusCode) {
//         super(message)
//         this.statusCode = statusCode


//         // bir xetanin bas verdiyi yeri gosterir
//         Error.captureStackTrace(this, this.constructor)

//     }
// }


// // default bir defe istenilen ad ile

// export default ErrorHandler

// // function People(ad,soyad){
// //     this.ad=ad
// //     this.soyad=soyad
// // }



class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default ErrorHandler;
