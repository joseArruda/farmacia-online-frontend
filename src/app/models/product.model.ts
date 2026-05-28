export interface Product{
    id: number,
    name: string,
    description: string,
    category: string,
    stock: number | null,
    price: number | null,
    image: string | null;
}