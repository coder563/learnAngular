import { of } from "rxjs/internal/observable/of";

const myObservable = of(1, 2, 3);


myObservable.subscribe(
    
    {
        next:(x:number)=>console.log("am inside next "+ x),
        error:()=>console.log("am inside error"),
        complete:() => console.log("am completed")
    }



)



