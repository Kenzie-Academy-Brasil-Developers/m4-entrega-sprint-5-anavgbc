import { MigrationInterface, QueryRunner } from "typeorm";

export class buildingTables1666462974931 implements MigrationInterface {
  name = "buildingTables1666462974931";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "adresses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "district" character varying NOT NULL, "zipCode" character varying NOT NULL, "number" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, CONSTRAINT "PK_2787c84f7433e390ff8961d552d" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(60) NOT NULL, CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878" UNIQUE ("name"), CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "properties" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "value" numeric(12,2) NOT NULL, "sold" boolean NOT NULL DEFAULT false, "size" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "addressId" uuid, "categoryId" uuid, CONSTRAINT "REL_2b2211958ef1f0e3c680339100" UNIQUE ("addressId"), CONSTRAINT "PK_2d83bfa0b9fcd45dee1785af44d" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "schedules_users_properties" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" date NOT NULL, "hour" TIME NOT NULL, "propertyId" uuid, "userId" uuid, CONSTRAINT "PK_751450246dee9abc82a47dabc4c" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(60) NOT NULL, "email" character varying(60) NOT NULL, "isAdm" boolean NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "password" character varying(120) NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "properties" ADD CONSTRAINT "FK_2b2211958ef1f0e3c680339100e" FOREIGN KEY ("addressId") REFERENCES "adresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "properties" ADD CONSTRAINT "FK_a82b56d3d456c30b8c630cba0c6" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "schedules_users_properties" ADD CONSTRAINT "FK_3193709d61be5a23d570547c964" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "schedules_users_properties" ADD CONSTRAINT "FK_6b07764ec82685efb66e5629845" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "schedules_users_properties" DROP CONSTRAINT "FK_6b07764ec82685efb66e5629845"`
    );
    await queryRunner.query(
      `ALTER TABLE "schedules_users_properties" DROP CONSTRAINT "FK_3193709d61be5a23d570547c964"`
    );
    await queryRunner.query(
      `ALTER TABLE "properties" DROP CONSTRAINT "FK_a82b56d3d456c30b8c630cba0c6"`
    );
    await queryRunner.query(
      `ALTER TABLE "properties" DROP CONSTRAINT "FK_2b2211958ef1f0e3c680339100e"`
    );
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "schedules_users_properties"`);
    await queryRunner.query(`DROP TABLE "properties"`);
    await queryRunner.query(`DROP TABLE "categories"`);
    await queryRunner.query(`DROP TABLE "adresses"`);
  }
}
