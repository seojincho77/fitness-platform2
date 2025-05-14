// 수정된 CreateRoutineExercises1746636000006
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateRoutineExercises1746636000006 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'routine_exercises',
      columns: [
        { name: 'id', type: 'uuid', isPrimary: true, isGenerated: true, generationStrategy: 'uuid' },
        { name: 'routineId', type: 'int' }, // 수정됨: uuid → int
        { name: 'exerciseId', type: 'int' }, // 수정됨: uuid → int
        { name: 'exercise_order', type: 'int', isNullable: true },
        { name: 'default_sets', type: 'int', isNullable: true },
        { name: 'default_reps', type: 'int', isNullable: true },
        { name: 'default_weight', type: 'float', isNullable: true },
      ],
    }));

    await queryRunner.createForeignKeys('routine_exercises', [
      new TableForeignKey({
        columnNames: ['routineId'],
        referencedTableName: 'routines',
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
    await queryRunner.dropTable('routine_exercises');
  }
}
