import {MigrationInterface, QueryRunner} from "typeorm";

export default class addStoreIdToUser1662899486587 implements MigrationInterface {

	name = 'addStoreIdToUser1662899486587';

    public async up(queryRunner: QueryRunner): Promise<void> {
		const query = `ALTER TABLE public."user" ADD COLUMN IF NOT EXISTS "store_id" text;`;
		await queryRunner.query(query);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		const query = `ALTER TABLE public."user" DROP COLUMN "store_id";`;
		await queryRunner.query(query);
	}
}
