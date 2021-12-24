const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const { sequelize } = require('./models/models');
//const {config} from 'dotenv';

async function startServer() {
  const app = express();

  //modules
  app.use(cors());
  app.use(express.json());
  app.use(cookieParser);
  app.use(helmet());
  app.use(morgan("tiny"));

  //routers 

  //exeptions
  app.use((req, res, next)=>{
      res.sendStatus(404);
  });
  app.use((error, req, res, next)=>{
      res.sendStatus(500);
  });
  
  //server
  await sequelize.sync({
      force: true,
  });

  console.log("server is started!");
  const server = app.listen(3000);
  return server;

}

async function stopServer(server) {
    return new Promise((resolve, reject)=>{
        server.close(async()=>{
            try{
                await sequelize.close();
                resolve();
            }catch(error){
                reject(error);
            }
        });
    });
}

exports.startServer = startServer;
exports.stopServer = stopServer;
