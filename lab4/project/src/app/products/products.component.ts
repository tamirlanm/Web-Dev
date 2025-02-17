import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products } from '../products';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: `
    <section class="listing">
      <img 
        class="listing-photo"
        [src]="products.photo"
        alt="Exterior photo of {{products.name}}"
        crossorigin
      />
      <h2 class="listing-heading">{{products.name}}</h2>
      <p class="listing-location">Рейтинг: {{products.rating.toFixed(1)}}  |  Цена:{{products.price}} {{products.pricetype}}</p>
      <a [routerLink]="['/details', products.id]">Подробнее</a>

      <!-- Кнопки "Поделиться" -->
      <section class="listing-share">
        <button class="share-button" (click)="shareProduct('whatsapp')">Поделиться в WhatsApp</button><br>
        <button class="share-button2" (click)="shareProduct('telegram')">Поделиться в Telegram</button>
      </section>
    </section>
  `,
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() products!: Products;
  shareProduct(platform: 'whatsapp' | 'telegram') {
    if (!this.products) return;

    const productUrl = `http://localhost:4200/details/${this.products.id}`; // 
    const message = encodeURIComponent(`Check out this product: ${this.products.name} - ${productUrl}`);

    let shareUrl = '';

    if (platform === 'whatsapp') {
      shareUrl = `https://wa.me/?text=${message}`;
    } else if (platform === 'telegram') {
      shareUrl = `https://t.me/share/url?url=${encodeURIComponent(productUrl)}&text=${message}`;
    }

    window.open(shareUrl, '_blank');
  }
}
