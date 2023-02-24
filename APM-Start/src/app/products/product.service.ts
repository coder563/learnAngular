import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { __importDefault } from "tslib";
import { IProduct } from "./product";





@Injectable({
    providedIn:'root'
})
export class ProductService
{
  private productURL = 'api/products/products.json' 
    constructor(private http: HttpClient){}

  
  getProducts(): Observable<IProduct[]>{
           
            
            console.log("inside getproducts " )
            const products =  this.PauserFunction()
            console.log("Post PauserFunction " )
            return products
             
    }
    private HandleError(err: HttpErrorResponse){

        const errorMessage  = err.error.message
        console.log("Error found " + errorMessage)
        return throwError(()=>errorMessage)

    }

    private PauserFunction(): Observable<IProduct[]>{

      const products = this.http.get<IProduct[]>(this.productURL)
      setTimeout(() => {  console.log("World!"); }, 3000);
      products.pipe(tap( data=>console.log('All products',JSON.stringify(data)),
                    catchError(this.HandleError)))
            

      return products
    }
}