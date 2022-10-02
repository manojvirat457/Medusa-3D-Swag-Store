import { ProductRepository as MedusaProductRepository } from '@medusajs/medusa/dist/repositories/product';
import { Repository as MedusaRepository, Utils } from 'medusa-extender';
import { EntityRepository } from 'typeorm';
import { Product } from './product.entity';

@MedusaRepository({ override: MedusaProductRepository })
@EntityRepository(Product)
export default class ProductRepository extends Utils.repositoryMixin<Product, MedusaProductRepository>(MedusaProductRepository) {}
