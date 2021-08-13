import "reflect-metadata"
import { startServer } from "./server";
import { connectDb } from "./utils/database";

async function main(){
  try {    
    connectDb()
    const app = await startServer()
    
    app?.listen(4000)
    console.log('start')

  } catch (error) {
    console.log('Error on init server')
  }

}

main()