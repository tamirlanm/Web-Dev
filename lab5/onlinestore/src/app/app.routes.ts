import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';

export const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'products', component: ProductListComponent},
    {path: 'products/', component: ProductItemComponent}
];
