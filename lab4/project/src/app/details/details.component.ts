import { Component, inject, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Products } from '../products';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      <img
      class="listing-photo"
      [src]="products?.photo"
      alt="Exterior photo of {{products?.name}}"
      crossogin
      />
      <section class="listing-description">
      <h2 class="listing-heading">{{products?.name}}</h2>
      <p class="listing-location">{{products?.rating}}   |  Цена: {{products?.price}} {{products?.pricetype}}</p>
      </section>
      <section class="listing-features">
      <h2 class="section-heading">Про этот продукт</h2>
      <ul>
        <li>Тип: {{products?.type}}</li>
        <li>Процессор: {{products?.processor}}</li>
        <li>RAM: {{products?.ram}}</li>
        <li>Видеокарта: {{products?.video}}</li>
        <li>Операционная система: {{products?.os}} </li>
      </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Подайте заявку, чтобы получить ноутбук</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="first-name">Имя</label>
        <input id="first-name" type="text" formControlName="firstName" />
        <label for="last-name">Фамилия</label>
        <input id="last-name" type="text" formControlName="lastName" />
        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email" />
        <button type="submit" class="primary">Apply now</button>
        </form>
        <section>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productService = inject(ProductService);
  products: Products | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  productsId = -1;
  constructor(){
    this.productsId = Number(this.route.snapshot.params['id']);
    this.products = this.productService.getProductsById(this.productsId);
  }
  submitApplication(){
    this.productService.submitApplication(
    this.applyForm.value.firstName ?? '',
    this.applyForm.value.lastName ?? '',
    this.applyForm.value.email ?? '',
  );
}
}
