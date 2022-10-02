import { Migration } from "medusa-extender";
import {MigrationInterface, QueryRunner} from "typeorm";

@Migration()
export default class addStoreIdToProduct1662899467489 implements MigrationInterface {

	name = 'addStoreIdToProduct1662899467489';

    public async up(queryRunner: QueryRunner): Promise<void> {
		const query = `ALTER TABLE public."product" ADD COLUMN IF NOT EXISTS "store_id" text;`;
		await queryRunner.query(query);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		const query = `ALTER TABLE public."product" DROP COLUMN "store_id";`;
		await queryRunner.query(query);
	}

}
