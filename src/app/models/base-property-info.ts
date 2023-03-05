import { Address } from "./address";
import { PropertyImage } from "./property-image";

export class BasePropertyInfo {
    _id: string = '';
    isAvailable: boolean = false;
    address!: Address;
    beds: number = 0;
    baths: number = 0;
    images: PropertyImage[] = [];
    details: string[] = [];
}

