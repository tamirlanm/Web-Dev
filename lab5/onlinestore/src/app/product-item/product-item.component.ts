import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() like = new EventEmitter<string>();
  @Output() remove = new EventEmitter<string>();
  currentImageIndex = 0;

  prevImage() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    } else {
      this.currentImageIndex = this.product.photo.length - 1;
    }
  }

  nextImage() {
    if (this.currentImageIndex < this.product.photo.length - 1) {
      this.currentImageIndex++;
    } else {
      this.currentImageIndex = 0;
    }
  }

  onLikeClick() {
    this.like.emit(this.product.name);
  }

  onRemoveClick() {
    this.remove.emit(this.product.name);
  }
  share(link: string, platform: string) {
    let url = '';
    if (platform === 'whatsapp') {
      url = `https://wa.me/?text=${encodeURIComponent(link)}`;
    } else if (platform === 'telegram') {
      url = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    }
    window.open(url, '_blank');
  }
} 