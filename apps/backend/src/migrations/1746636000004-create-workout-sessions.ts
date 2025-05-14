import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateWorkoutSessions1746636000004 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'workout_sessions',
      columns: [
        { name: 'id', type: 'uuid', isPrimary: true, isGenerated: true, generationStrategy: 'uuid' },
        { name: 'userId', type: 'int' }, // ✅ uuid → int
        { name: 'routineId', type: 'int', isNullable: true },
        { name: 'date', type: 'date', default: 'CURRENT_DATE' },
        { name: 'start_time', type: 'timestamp' },
        { name: 'end_time', type: 'timestamp', isNullable: true },
        { name: 'total_time', type: 'int', isNullable: true },
        { name: 'total_volume', type: 'int', default: 0 },
        { name: 'created_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
      ],
    }));

    await queryRunner.createForeignKeys('workout_sessions', [
      new TableForeignKey({
        columnNames: ['userId'],
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['routineId'],
        referencedTableName: 'routines',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('workout_sessions');
  }
}
