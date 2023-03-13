
export class Metadata {
    hasTestimonials: string = '';
    hasVirtualTour: string = '';
}

export class Product {
    id: string = '';
    object: string = '';
    active: boolean = true;
    attributes: any[] = [];
    created: number = 0;
    default_price: { id: string, type: string, unit_amount: number } = { id: '', type: '', unit_amount: 0 };
    description: string = '';
    images: string[] = [];
    livemode: boolean = true;
    metadata!: Metadata;
    name: string = '';
    package_dimensions?: any;
    shippable?: any;
    statement_descriptor?: any;
    tax_code?: any;
    type: string = '';
    unit_label: string = '';
    updated: number = 0;
    url?: any;
}

export class ProductList {
    object: string = '';
    data: Product[] = [];
    has_more: boolean = true;
    url: string = '';
}