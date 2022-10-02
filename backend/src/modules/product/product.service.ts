import { EntityEventType, MedusaEventHandlerParams, OnMedusaEntityEvent, Service } from 'medusa-extender';
import { EntityManager } from 'typeorm';
import { EventBusService, ProductService as MedusaProductService, SearchService } from '@medusajs/medusa/dist/services';
import UserSubscriber from './product.subscriber';
import { FindConfig } from '@medusajs/medusa/dist/types/common';
import { ProductVariantService } from '@medusajs/medusa';
import ProductRepository from './product.repository';
import { ProductOptionRepository } from '@medusajs/medusa/dist/repositories/product-option';
import { ProductVariantRepository } from '@medusajs/medusa/dist/repositories/product-variant';
import { ProductTagRepository } from '@medusajs/medusa/dist/repositories/product-tag';
import { ProductTypeRepository } from '@medusajs/medusa/dist/repositories/product-type';
import { ImageRepository } from '@medusajs/medusa/dist/repositories/image';
import { FlagRouter } from '@medusajs/medusa/dist/utils/flag-router';
import { Product } from  '@medusajs/medusa';
import { FindProductConfig } from '@medusajs/medusa/dist/types/product';

type InjectedDependencies = {
	manager: EntityManager;
    productOptionRepository: typeof ProductOptionRepository;
    productRepository: typeof ProductRepository;
    productVariantRepository: typeof ProductVariantRepository;
    productTypeRepository: typeof ProductTypeRepository;
    productTagRepository: typeof ProductTagRepository;
    imageRepository: typeof ImageRepository;
    productVariantService: ProductVariantService;
    searchService: SearchService;
    eventBusService: EventBusService;
    featureFlagRouter: FlagRouter;
};

@Service({ override: MedusaProductService })
export default class ProductService extends MedusaProductService {
	private readonly manager: EntityManager;
	private readonly productRepository: typeof ProductRepository;
	private readonly productOptionRepository: typeof ProductOptionRepository;
	private readonly productVariantRepository: typeof ProductVariantRepository;
	private readonly productTypeRepository: typeof ProductTypeRepository;
	private readonly productTagRepository: typeof ProductTagRepository;
	private readonly imageRepository: typeof ImageRepository;
	private readonly searchService: typeof SearchService;
	private readonly featureFlagRouter: typeof FlagRouter;

	constructor({ manager, productRepository, eventBusService, featureFlagRouter, imageRepository, productOptionRepository, productTagRepository, productTypeRepository, productVariantRepository, productVariantService, searchService }: InjectedDependencies) {
		super({ manager, productRepository, eventBusService, featureFlagRouter, imageRepository, productOptionRepository, productTagRepository, productTypeRepository, productVariantRepository, productVariantService, searchService });
		this.manager = manager;
		this.productRepository = productRepository;
		this.featureFlagRouter = this.featureFlagRouter;
		// UserSubscriber.attachTo(manager.connection);
	}

	@OnMedusaEntityEvent.Before.Insert(Product, { async: true })
	public async attachStoreToProduct(
		params: MedusaEventHandlerParams<Product, 'Insert'>
	): Promise<EntityEventType<Product, 'Insert'>> {
		console.log(params.event.entity.store_id);
		params.event.entity.metadata = params.event.entity.metadata || {};
		params.event.entity.metadata.someData = 'test';
		return params.event;
	}

	async retrieve(productId: string, config?: FindProductConfig): Promise<Product> {
		const product = await super.retrieve(productId, config);
		console.log(product);
		return product;
	}

	async insertPreviewFile(files: File[]): Promise<boolean> {

		files.forEach(element => {
			console.log(element.name);
		});

		return true;
	}
}
