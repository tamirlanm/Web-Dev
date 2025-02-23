import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, Category } from './product';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, ProductListComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  categories: Category[] = [
    {
    name: 'Laptops',
    products: [
      {
        name: 'Apple MacBook Pro 14 2024 / 24 Гб / SSD 512 Гб / macOS /',
        description: 'Процессор: Apple M4 Pro, RAM: 24 ГБ, OS: macOS',
        rating: 5,
        price: 1136446,
        pricetyp: '₸',
        photo: ['/assets/applemacbookpro14.jpeg','/assets/pro14_2.jpeg'],
        likes: 0,
        link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-24-gb-ssd-512-gb-macos-mx2h3-132140624/?c=750000000'
      },
      {
        name: 'Acer Gadget E10 ETBook 14" / 16 Гб / SSD 512 Гб / Win 11 Home /',
        description: 'Процессор: Intel Core i5-12450H, RAM: 16 ГБ, OS: Win 11 Home',
        rating: 4.9,
        price: 274990,
        pricetyp: '₸',
        photo: ['/assets/acergadgete10.jpg', '/assets/e_2.jpg'],
        likes: 0,
        link: 'https://kaspi.kz/shop/p/acer-gadget-e10-etbook-14-16-gb-ssd-512-gb-win-11-home-0167563995-121895857/?c=750000000'
      },
      {
        name: 'Acer Aspire 3 15.6" / 8 Гб / SSD 256 Гб / Win 11 / A315-35 /',
        description: 'Процессор: Intel Pentium Silver N5000, RAM: 8 ГБ, OS: Win 11',
        rating: 4.9,
        price: 231458,
        pricetyp: '₸',
        photo: ['/assets/aceraspire3.jpg'],
        likes: 0,
        link: 'https://kaspi.kz/shop/p/acer-aspire-3-15-6-8-gb-ssd-256-gb-win-11-a315-35-nx-a9aex-00h-114792265/?c=750000000'
      },
      {
        name: 'ThundeRobot Zero G3 Ultra 16" / 32 Гб / SSD 2048 Гб / Win 11 /',
        description: 'Процессор: Intel Core i9-13900HX, RAM: 32 ГБ, OS: Win 11',
        rating: 0,
        price: 1549999,
        pricetyp: '₸',
        photo: ['/assets/thunderobotzerog3.jpg',
          '/assets/zerog3_2.jpg',
          '/assets/zerog3_3.jpg'
        ],
        likes: 0,
        link: 'https://kaspi.kz/shop/p/thunderobot-zero-g3-ultra-16-32-gb-ssd-2048-gb-win-11--114123805/?c=750000000'
      },
      {
        name: 'Apple MacBook Air 13 2022 13.6" / 8 Гб / SSD 256 Гб / macOS /',
        description: 'Процессор: Apple M2, RAM: 8 ГБ, OS: macOS',
        rating: 4.9,
        price: 482953,
        pricetyp: '₸',
        photo: ['/assets/applemacbookair13.jpg',
          'assets/air2.jpg'
        ],
        likes: 0,
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000'
      }
    ]
  },
  {
    name: 'Phones',
    products:[
      {
        name: 'Apple iPhone 13 128GB черный',
        description: 'Процессор: 6-ядерный Apple A15 Bionic, RAM: 4 ГБ, OS: iOS 15',
        rating: 4.9,
        price: 271505,
        pricetyp: '₸',
        photo: ['/assets/iphone13.jpg',
          '/assets/13_2.jpg',
          '/assets/13_3.jpg'
        ],
        likes: 0,
        link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
      },
      {
        name: 'Смартфон Samsung Galaxy A55 5G 8 ГБ/256 ГБ темно-синий',
        description: 'Процессор: 8-ядерный Exynos 1480, RAM: 8 ГБ, OS: Andro 14',
        rating: 4.9,
        price: 195932,
        pricetyp: '₸',
        photo: ['/assets/galaxya55.jpeg',
          '/assets/galaxya55_2.jpeg',
          '/assets/galaxya55_3.jpeg'
        ],
        likes: 0,
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000'
      },
      {
        name: 'Смартфон Samsung Galaxy S24 Ultra 5G 12 ГБ/256 ГБ черный',
        description: 'Процессор: 8-ядерный Snapdragon 8 Gen 3, RAM: 12 ГБ, OS: Andro 14', 
        rating: 4.9,
        price: 480780,
        pricetyp: '₸',
        photo: ['/assets/galaxyx24.jpeg', 
          '/assets/s24_2.jpeg',
          '/assets/s24_3.jpeg'
        ],
        likes: 0,
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-chernyi-116044354/?c=750000000'
      },
      {
        name: 'Смартфон HONOR X9c 12 ГБ/256 ГБ черный',
        description: 'Процессор: Qualcomm SM6450 Snapdragon 6 Gen 1, RAM: 12 ГБ, OS: Andro 14',
        rating: 4.9,
        price: 182879,
        pricetyp: '₸',
        photo: ['/assets/honor.jpeg',
          '/assets/honor_2.jpeg',
          '/assets/honor_3.jpeg'
        ],
        likes: 0,
        link: 'https://kaspi.kz/shop/p/honor-x9c-12-gb-256-gb-chernyi-130777157/?c=750000000'
      },
      {
        name: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный',
        description: 'Процессор: 6-ядерный Apple A18 Pro, RAM: 8 ГБ, OS: iOS 18',
        rating: 5,
        price: 674536,
        pricetyp: '₸',
        photo: ['/assets/iphone16promax.jpeg',
          '/assets/16promax_2.jpeg',
          '/assets/16promax_3.jpeg'
        ],
        likes: 0,
        link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000'
      }
    ],
  },
  {
    name: 'Manga ',
    products:  [
      {
        name: 'Книга Кисимото М.: Наруто. Книга 16. Наруто возвращается',
        description: 'Автор/Редактор: Кисимото М., Возраст: 16+, Переплет: твердый переплет',
        rating: 5,
        price: 6875,
        pricetyp: '₸',
        photo: ['/assets/manga1.jpeg'],
        likes:0,
        link: 'https://kaspi.kz/shop/p/kisimoto-m-naruto-kniga-16-naruto-vozvraschaetsja-130638812/?c=750000000'
      },
      {
        name: 'Книга Фудзимото Т.: Прощай, Эри',
        description: 'Автор/Редактор: Фудзимото Т., Возраст: 16+, Переплет: твердый переплет',
        rating: 0,
        price: 5087,
        pricetyp: '₸',
        photo: ['/assets/manga2.jpeg'],
        likes: 0,
        link: 'https://kaspi.kz/shop/p/fudzimoto-t-proschai-eri-132823172/?c=750000000'
      },
      {
        name: 'Книга Миура Кэнтаро: Берсерк. Том 7',
        description: 'Автор/Редактор: Миура Кэнтаро, Возраст: 18+, Переплет: твердый переплет',
        rating: 5,
        price: 9959,
        pricetyp: '₸',
        photo: ['/assets/manga3.jpg'],
        likes: 0,
        link: 'https://kaspi.kz/shop/p/fudzimoto-t-ognennyi-udar-kniga-2-110428060/?c=750000000'
      },
      {
        name: 'Книга Фудзисава Т.: GTO. Крутой учитель Онидзука. Часть 1',
        description: 'Автор/Редактор: Фудзисава Т., Возраст: 16+, Переплет: твердый переплет',
        rating: 5,
        price: 5990,
        pricetyp: '₸',
        photo: ['/assets/manga4.jpg'],
        likes: 0,
        link: 'https://kaspi.kz/shop/p/fudzisava-t-gto-krutoi-uchitel-onidzuka-chast-1-103478923/?c=750000000'
      },
      {
        name: 'Книга Фудзимото Т.: Огненный удар. Книга 2',
        description: 'Автор/Редактор: Фудзимото Т., Возраст: 18+, Переплет: твердый переплет',
        rating: 5,
        price: 5000,
        pricetyp: '₸',
        photo: ['/assets/manga5.jpg'],
        likes: 0,
        link: 'https://kaspi.kz/shop/p/fudzimoto-t-ognennyi-udar-kniga-2-110428060/?c=750000000'
      }
    ]
  },
  {
    name: 'Audio',
    products:[
      {
        name: 'Наушники HYDRA Minor бежевый',
        description : 'Тип: наушники, Подключение: беспроводное, Назначение: для любых задач',
        rating: 4.8,
        price: 9990,
        pricetyp: '₸',
        photo: ['/assets/audio1.jpg','/assets/audio1_2.jpg'],
        likes: 0,
        link: 'https://kaspi.kz/shop/p/hydra-minor-bezhevyi-120724130/?c=750000000'
      },{
        name: 'Наушники Apple AirPods 3 with Lightning Charging Case белый',
        description: 'Тип: гарнитура, Подключение: беспроводное, Назначение: для любых задач',
        rating: 4.9,
        price: 67799,
        pricetyp: '₸',
        photo: ['/assets/audio2.jpg',
          '/assets/audio2_2.jpg'
        ],
        likes: 0,
        link: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000'
      },
      {
        name: 'Портативная колонка BT SPEAKER ZQS-4239 черный',
        description: 'Тип: моно, Подключение: проводное-беспроводное, Время работы8.0 ч',
        rating: 4.7,
        price: 4098,
        pricetyp: '₸',
        photo: ['/assets/audio3.jpg'],
        likes: 0,
        link: 'https://kaspi.kz/shop/p/portativnaja-kolonka-bt-speaker-zqs-4239-chernyi-110785723/?c=750000000'
      },
      {
        name: 'Наушники JBL T110 черный',
        description: 'Тип: гарнитура, Подключение: с проводом, Назначение: для любых задач',
        rating: 4.8,
        price: 1799,
        pricetyp: '₸',
        photo: ['/assets/audio4.jpg'],
        likes: 0,
        link: 'https://kaspi.kz/shop/p/jbl-t110-chernyi-4802159/?c=750000000'
      },
      {
        name: 'Наушники Huawei Freebuds SE 2 белый',
        description: 'Тип: гарнитура, Подключение: беспроводное, Назначение: для любых задач',
        rating: 4.9,
        price: 13999,
        pricetyp: '₸',
        photo: ['/assets/audio5.jpeg'],
        likes: 0,
        link: 'https://kaspi.kz/shop/p/huawei-freebuds-se-2-belyi-113250696/?c=750000000'
        }
      ]
    }
  ];

  allProducts: Product[] = [];
  selectedCategory: Category = { name: 'Все товары', products: [] };

  constructor() {
    this.allProducts = this.categories.flatMap(category => category.products);
    this.showAllProducts();
  }

  selectCategory(category: Category) {
    this.selectedCategory = { ...category, products: [...category.products] };
  }

  showAllProducts() {
    this.selectedCategory = { name: 'Все товары', products: [...this.allProducts] };
  }
}
