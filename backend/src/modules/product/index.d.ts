import { default as ExtendedProductRepository } from './product.repository';

declare module '@medusajs/medusa/dist/models/product' {
	declare interface Product {
		store_id: string;
		// preview_url: string;
	}
}

declare module '@medusajs/medusa/dist/repositories/product' {
	declare class ProductRepository extends ExtendedProductRepository {}
}
