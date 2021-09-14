interface Product {
    title: string;
    price: number
}

const data: Product[] = [
    { title: 'Producto W', price: 5 },
    { title: 'Producto X', price: 10 },
    { title: 'Producto Y', price: 15 },
    { title: 'Producto Z', price: 20 }
];

export const Product = {
    getAll: (): Product[] => {
        return data;
    },
    getFromPriceAfter: (price: number): Product[] => {
        return data.filter(item => item.price >= price);
    }
};
