module.exports = {
  production: {
    username: 'seowoo',
    password: process.env.DATABASE_PASSWORD,
    database: 'practice_database',
    host: 'practice-database.caigyvnrnnfo.ap-northeast-2.rds.amazonaws.com',
    dialect: 'mysql',
    port: 13306,
    logging: false
  }
};
