import { createConnection } from "typeorm";
import path from 'path';

export async function connectDb(){
  try {

    await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'graphql-test',
      entities: [
        path.join(__dirname, '../entity/**/**.ts')
      ],
      synchronize: true,
    })
    console.log('Db is conneted');
    
  } catch (error) {
    console.log(error, 'error in db')
  }
}