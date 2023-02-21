
import {Component, OnInit} from "@angular/core"
import { IProduct } from "./product"

@Component({

    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
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


    get filter(): string {

        return this._filter


    }

    filteredProducts:IProduct[]=[]
    
    products:IProduct[] = [
        {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2021",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "../assets/images/leaf_rake.png"
      },
      {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2021",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "../assets/images/garden_cart.png"
      },
      {
        "productId": 3,
        "productName": "3 Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2021",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "../assets/images/garden_cart.png"
      },
      {
        "productId": 4,
        "productName": "4 Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2021",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "../assets/images/garden_cart.png"
      }
    ]

    toggleImage(){

       this.showImage = !this.showImage
    }


    ngOnInit(): void {
        

       this._filter='barty'
       console.log(this._filter)
    }

    performFilter():IProduct[]{

       return this.products.filter((product:IProduct)=> product.productName.toLowerCase().includes(this._filter.toLowerCase()))

    }
}