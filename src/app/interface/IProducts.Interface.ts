export default interface IProductsInterface{
    id: number,
    name: string,
    description: string,
    category: string,
    stock: number,
    price: number,
    image: File | null;
}