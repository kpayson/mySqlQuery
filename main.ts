import { createPool } from 'mysql2';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { config } from 'node-config-ts'

const ca = readFileSync(resolve(__dirname, config.sslPemFile));

const poolOptions = {
    host: config.host,
    port: config.port,
    database: config.database,
    user: config.user,
    password: config.password,
    connectionLimit: config.connectionLimit,
    ssl: {
      ca: [ca],
      rejectUnauthorized: config.sslRejectUnauthorized
    }
};
const pool  =  createPool(poolOptions);

pool.query(config.testQuery, function (error, results, fields) { 
    if (error) {
        throw error;
    };
    console.log(results);
});
