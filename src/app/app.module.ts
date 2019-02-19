import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { ProductDepartmentComponent } from './product-department/product-department.component';
import { PriceDisplayComponent } from './price-display/price-display.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ProductComponent } from './product/product.component';
import { ProductRowComponent } from './product-row/product-row.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductImageComponent,
    ProductDepartmentComponent,
    PriceDisplayComponent,
    InventoryComponent,
    ProductComponent,
    ProductRowComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
