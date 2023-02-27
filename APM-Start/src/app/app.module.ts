import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { AppComponent } from "./app.component"
import { ProductListComponent } from "./products/product-list.component"
import { ProductDetailComponent } from './products/product-detail.component'
import { WelcomeComponent } from "./home/welcome.component"
import { RouterModule } from "@angular/router"
import { ProductDetailGuard } from "./products/product-detail.guard"
import { ProductModule } from "./products/product.module"
import { HttpClientModule } from "@angular/common/http"


@NgModule({
  imports:[ BrowserModule,        
            HttpClientModule,
            RouterModule.forRoot([
                {path:'welcome', component: WelcomeComponent},
                {path:'' , component:WelcomeComponent},
                {path: '**', component:WelcomeComponent}


            ]), ProductModule  ],
  declarations:[
    AppComponent, 
   
    WelcomeComponent],
  bootstrap:[AppComponent]
})
export class AppModule{
 
}