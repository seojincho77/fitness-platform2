import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreatePosts1746636000007 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'posts',
      columns: [
        { name: 'id', type: 'uuid', isPrimary: true, generationStrategy: 'uuid', default: 'uuid_generate_v4()' },
        { name: 'userId', type: 'int' }, // 🔧 수정: uuid → int
        { name: 'workout_sessionId', type: 'uuid', isNullable: true },
        { name: 'image_url', type: 'varchar', isNullable: true },
        { name: 'content', type: 'text', isNullable: true },
        { name: 'likes_count', type: 'int', default: 0 },
        { name: 'created_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
      ],
    }));

    await queryRunner.createForeignKeys('posts', [
      new TableForeignKey({
        columnNames: ['userId'],
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['workout_sessionId'],
        referencedTableName: 'workout_sessions',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('posts');
  }
}
