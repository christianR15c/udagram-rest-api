export const config = {
  dev: {
    username: 'udagramfullstack',
    password: 'udagramfullstack',
    database: 'udagramfullstack',
    host: 'udagramfullstack.chjwao6hjig7.us-east-1.rds.amazonaws.com',
    dialect: 'postgres',
    aws_region: 'us-east-2',
    aws_profile: 'default',
    aws_media_bucket: 'udagram-ruttner-dev',
  },
  jwt: {
    secret: ' ',
  },
  prod: {
    username: '',
    password: '',
    database: 'udagram_prod',
    host: '',
    dialect: 'postgres',
  },
};
