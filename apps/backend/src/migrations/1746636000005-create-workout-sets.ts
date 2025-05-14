// 수정된 CreateWorkoutSets1746636000005
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateWorkoutSets1746636000005 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'workout_sets',
      columns: [
        { name: 'id', type: 'uuid', isPrimary: true, isGenerated: true, generationStrategy: 'uuid' },
        { name: 'workout_sessionId', type: 'uuid' },
        { name: 'exerciseId', type: 'int' }, // 수정됨: uuid → int
        { name: 'set_number', type: 'int' },
        { name: 'reps', type: 'int' },
        { name: 'weight', type: 'float' },
        { name: 'volume', type: 'float' },
      ],
    }));

    await queryRunner.createForeignKeys('workout_sets', [
      new TableForeignKey({
        columnNames: ['workout_sessionId'],
        referencedTableName: 'workout_sessions',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['exerciseId'],
        referencedTableName: 'exercises',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('workout_sets');
  }
}
