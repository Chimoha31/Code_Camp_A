import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'detail', component: ProductDetailComponent}
];


@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  
  ],
  providers: [],
  bootstrap: [],
})
export class ProductModule {}
