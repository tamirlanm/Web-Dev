import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../products/products.component';
import { Products } from '../products';
import { ProductService } from '../product.service';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, ProductsComponent],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by price" #filter/>
      <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
    </form>
  </section>
  <section class="results">
    <app-products 
    *ngFor="let products of filteredProductsList"
    [products]="products">
    </app-products>
  </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productsList: Products[] = [];
  productService: ProductService = inject(ProductService);
  filteredProductsList: Products[];
  constructor() {
    this.productsList = this.productService.getAllProducts();
    this.filteredProductsList = this.productsList;
  }
  filterResults(text: string) {
    const priceFilter = Number(text.trim()); 
 
    if (isNaN(priceFilter)) {
      console.log("Введено некорректное число:", text); 
      this.filteredProductsList = this.productsList; 
      return;
    }
  
    this.filteredProductsList = this.productsList.filter(product => {
      const productPrice = Number(product.price); 
      console.log(`Проверяем: ${product.name}, Цена: ${productPrice}`); 
      return productPrice >= priceFilter;
    });  
    console.log("Отфильтрованные продукты:", this.filteredProductsList); 
  }
  
}
