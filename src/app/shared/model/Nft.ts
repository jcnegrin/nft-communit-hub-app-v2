export interface Nft {
    id: string;
    name: string;
    price: number;
    curency: 'EUR' | 'USD';
    currentCurrencyPrice: number;
    description?: string;
}