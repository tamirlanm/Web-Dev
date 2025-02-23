export interface Product {
    name: string,
    description: string,
    rating: number,
    price: number,
    pricetyp: string,
    photo: string[],
    likes: number,
    link: string;
}

export interface Category {
    name: string;
    products: Product[];
}