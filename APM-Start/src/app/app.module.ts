import { NgModule } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { BrowserModule } from "@angular/platform-browser"
import { AppComponent } from "./app.component"
import { ProductListComponent } from "./products/product-list.component"
import { ConvertToSpaces } from "./shared/convert-to-spaces.pipe"
import { StarComponent } from "./shared/star.component"
import { HttpClientModule} from "@angular/common/http";
import { ProductDetailComponent } from './products/product-detail.component'


@NgModule({
  imports:[BrowserModule, FormsModule, HttpClientModule],
  declarations:[AppComponent, ProductListComponent, ConvertToSpaces, StarComponent, ProductDetailComponent],
  bootstrap:[AppComponent]
})
export class AppModule{
 
}