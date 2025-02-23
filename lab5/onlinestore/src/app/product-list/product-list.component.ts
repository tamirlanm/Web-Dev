import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() like = new EventEmitter<string>();
  @Output() remove = new EventEmitter<string>();

  onLike(productName: string) {
    const product = this.products.find(p => p.name === productName);
    if (product) {
      product.likes++; 
    }
  }

  onRemove(productName: string) {
    this.products = this.products.filter(product => product.name !== productName);
  }
}
