import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-listings/product-listings.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'products',
    component: ProductComponent,
    children: [
      { path: '', component: ProductListComponent },
      { path: 'detail', component: ProductDetailComponent },
    ],
  },
];

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductListComponent,
  ],
  imports: [RouterModule.forChild(routes), CommonModule],
  providers: [],
  bootstrap: [],
})
export class ProductModule {}
