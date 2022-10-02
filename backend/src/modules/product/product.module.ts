import { Module } from 'medusa-extender';
import ProductService from './product.service';
import addStoreIdToProduct1662899467489 from './1662899467489-addStoreIdToProduct';
import ProductRepository from './product.repository';
import { Product } from './product.entity';
// import addPreviewURLToProduct1662899467489 from './1662899467489-addPreviewURLToProduct';

@Module({
	imports: [Product, ProductRepository, ProductService, addStoreIdToProduct1662899467489],
})
export class ProductModule {}
