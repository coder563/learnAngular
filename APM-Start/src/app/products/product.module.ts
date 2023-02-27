import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpaces } from '../shared/convert-to-spaces.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      {
        path: 'productDetails/:id',
        component: ProductDetailComponent,
        canActivate: [ProductDetailGuard],
      },
    ]),
    SharedModule,
  ],
  declarations: [ProductListComponent, ConvertToSpaces, ProductDetailComponent],
})
export class ProductModule {}
