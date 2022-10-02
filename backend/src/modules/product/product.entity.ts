import { Entity as MedusaEntity } from 'medusa-extender';
import { Product as MedusaProduct } from '@medusajs/medusa';
import { Column, Entity, Index } from 'typeorm';

@MedusaEntity({ override: MedusaProduct })
@Entity()
export class Product extends MedusaProduct {
	@Index()
	@Column({ nullable: true })
	store_id: string;

	// @Column({nullable: true})
	// preview_url: string;
}
