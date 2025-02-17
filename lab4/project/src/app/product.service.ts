import { Injectable } from '@angular/core';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  protected productsList: Products[] = [
    {
    id: 0,
    name: 'Laptop ThundeRobot 911 X Wild Hunter G2 Pro 15.6" / 16 Гб / SSD 512 Гб / Win 11 Pro /',
    rating: 4.9,
    price: 529766,
    pricetype: '₸',
    photo: 'assets/thunderobot911xwildhunterg2pro.jpg',
    processor: 'Intel Core i5-12450H',
    ram: '16gb',
    video: 'NVIDIA GeForece RTX 4060',
    os: 'Win 11 Pro',
    type: 'игровой',
  },
  {
    id: 1,
    name: 'Apple MacBook Air 13 2022 13.6" / 8 Гб / SSD 256 Гб / macOS /',
    rating: 4.9,
    price: 482953,
    pricetype: '₸',
    photo: 'assets/applemacbookair13.jpg',
    processor: 'Apple M2',
    ram: '8gb',
    video: 'Apple M2 8-Core',
    os: 'macOS',
    type: 'для работы и учёбы',
  },
  {id: 2,
    name: 'Lenovo IdeaPad 3 15.6" / 4 Гб / SSD 256 Гб / Без ОС / 15IGL05 /',
    rating: 4.8,
    price: 173959,
    pricetype: '₸',
    photo: 'assets/lenovoideapad3.jpg',
    processor: 'Intel Celeron N4020',
    ram: '4gb',
    video: 'Intel UHD Graphics 600',
    os: 'Без ОС',
    type: 'для работы и учебы',
  },
  {id: 3,
    name: 'Lenovo LOQ 15.6" / 16 Гб / SSD 512 Гб / Без ОС / 15IAX9 /',
    rating: 4.8,
    price: 393284,
    pricetype: '₸',
    photo: 'assets/lenovoloq.jpg',
    processor: 'Intel Core i5-12450HX',
    ram: '16gb',
    video: 'NVIDIA',
    os: 'Без ОС',
    type: 'игровой',
  },
  {id: 4,
    name: 'ThundeRobot 911S Core D 15.6" / 16 Гб / SSD 512 Гб / Без ОС /',
    rating: 4.9,
    price: 388747,
    pricetype: '₸',
    photo: 'assets/thunderobot911s.jpg',
    processor: 'Intel Core i5-12450H',
    ram: '16gb',
    video: 'NVIDIA GeForece RTX 3050',
    os: 'Без ОС',
    type: 'игровой',
  },
  {
    id: 5,
    name: 'Acer Aspire 3 15.6" / 8 Гб / SSD 256 Гб / Win 11 / A315-35 /',
    rating: 4.9,
    price: 231458,
    pricetype: '₸',
    photo: 'assets/aceraspire3.jpg',
    processor: 'Intel Pentium Silver N5000',
    ram: '8gb',
    video: 'UHD',
    os: 'Win 11',
    type: 'для работы и учебы',
  },
  {
    id: 6,
    name: 'ThundeRobot Zero G3 Ultra 16" / 32 Гб / SSD 2048 Гб / Win 11 /',
    rating: 0,
    price: 1549999,
    pricetype: '₸',
    photo: 'assets/thunderobotzerog3.jpg',
    processor: 'Intel Core i9-13900HX',
    ram: '32gb',
    video: 'NVIDIA GeForece RTX 4080',
    os: 'Win 11',
    type: 'игровой',
  },
  {
    id: 7,
    name: 'Acer Gadget E10 ETBook 14" / 16 Гб / SSD 512 Гб / Win 11 Home /',
    rating: 4.9,
    price: 274990,
    pricetype: '₸',
    photo: 'assets/acergadgete10.jpg',
    processor: 'Intel Core i5-12450H',
    ram: '16gb',
    video: 'Intel UHD Graphics for 12th Gen',
    os: 'Win 11 Home',
    type: '',
  },
  {
    id: 8,
    name: 'HYDRA H20 15.6" / 12 Гб / SSD 512 Гб / Win 11 / MKII',
    rating: 4.6,
    price: 119990,
    pricetype: '₸',
    photo: 'assets/hydrah10.jpeg',
    processor: 'Intel Celeron J3455',
    ram: '12gb',
    video: 'Intel HD Graphics 500',
    os: 'Win 11',
    type: 'для работы и учебы',
  },
  {
    id: 9,
    name: 'Apple MacBook Pro 14 2024 / 24 Гб / SSD 512 Гб / macOS /',
    rating: 5,
    price: 1136446,
    pricetype: '₸',
    photo: 'assets/applemacbookpro14.jpeg',
    processor: 'Apple M4 Pro',
    ram: '24gb',
    video: 'Apple M4 Pro 16‑core GPU',
    os: 'macOS',
    type: 'ультрабук',
  }
  ];
  getAllProducts(): Products[] {
    return this.productsList;
  }
  getProductsById(id: number): Products | undefined {
    return this.productsList.find((products) => products.id === id);
  }
  constructor() { }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      ` Application for a laptop: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
