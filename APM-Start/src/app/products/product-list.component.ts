
import {Component, OnDestroy, OnInit} from "@angular/core"
import { IProduct } from "./product"
import { ProductService } from "./product.service"

@Component({

    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

    constructor(private productService : ProductService)  {}

    imageWidth: number = 50
    imageHeight: number = 50
    pageTitle:string='Fancy Product List'
    showImage:boolean=false
     
    private _filter:string = ""

    set filter(value:string){
        const __Blank__ =""
        this._filter = value
        if (value.trim()==__Blank__ )
          this.filteredProducts = this.products
        else
            this.filteredProducts=this.performFilter()
        
        
            console.log("value as set by the setter "+ this._filter)

    }

    onNotify (message: string){

            this.pageTitle = "This is the rating that was clicked " + message

    }

    get filter(): string {       return this._filter
    }

    filteredProducts:IProduct[]=[]    
    products:IProduct[] = []
       
    toggleImage(){

       this.showImage = !this.showImage
    }

    ngOnInit(): void {
        
       this._filter=''
       console.log(this._filter)
       const x = this.productService.getProducts()
       console.log("Before calling subscribe")
       x.subscribe({
        next:(products) =>{
            console.log('This is the product response received '+  products[0].description)
            /*this.products=products*/
            this.filteredProducts = products
            this.products =products
        },
        error:(err)=>console.log("Error Encountered " + err)
        })
       console.log("On Init Done")
    }

    performFilter():IProduct[]{

       return this.products.filter((product:IProduct)=> product.productName.toLowerCase().includes(this._filter.toLowerCase()))

    }
}