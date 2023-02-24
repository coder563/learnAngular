import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({

    selector:"pm-star",
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent{


            cropWidth:number = 75 
   @Input() rating:number =0


   ngOnChanges(){

        this.cropWidth = this.rating * 75/5

   }
   onClick(){

         this.notify.emit(this.rating.toString())
   }


   @Output() notify : EventEmitter<string> = new EventEmitter<string>()




   }


   
 