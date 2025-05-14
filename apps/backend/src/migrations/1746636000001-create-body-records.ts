import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateBodyRecords1746636000001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'body_records',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'userId',
            type: 'int', 
          },
          {
            name: 'date',
            type: 'date',
            default: 'CURRENT_DATE',
          },
          {
            name: 'weight',
            type: 'float',
          },
          {
            name: 'body_fat_percentage',
            type: 'float',
            isNullable: true,
          },
          {
            name: 'skeletal_muscle_mass',
            type: 'float',
            isNullable: true,
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      'body_records',
      new TableForeignKey({
        columnNames: ['userId'],
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('body_records');
  }
}
