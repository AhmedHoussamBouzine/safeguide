export interface Item {
    id: string;
    city: string;
    category: string;
    picture: string;
    description: string;
    location: { lat: number; lon: number };
    blocked: boolean;
}
