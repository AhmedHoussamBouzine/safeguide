export interface Item {
    id: string;
    city: string;
    category: string;
    pictures: string[];
    description: string;
    minprice: number;
    maxprice: number;
    location: { lat: number; lon: number };
    blocked: boolean;
}
