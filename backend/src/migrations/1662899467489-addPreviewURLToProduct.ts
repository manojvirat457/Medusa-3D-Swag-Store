import { Migration } from "medusa-extender";
import {MigrationInterface, QueryRunner} from "typeorm";

@Migration()
export default class addPreviewURLToProduct1662899467489 implements MigrationInterface {

	name = 'addPreviewURLToProduct1662899467489';

    public async up(queryRunner: QueryRunner): Promise<void> {
		const query = `ALTER TABLE public."product" ADD COLUMN IF NOT EXISTS "preview_url" text;`;
		await queryRunner.query(query);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		const query = `ALTER TABLE public."product" DROP COLUMN "preview_url";`;
		await queryRunner.query(query);
	}

}
