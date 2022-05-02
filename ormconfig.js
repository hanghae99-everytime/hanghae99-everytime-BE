module.exports = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  database: process.env.DATABASE,
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
