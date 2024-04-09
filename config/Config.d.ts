/* tslint:disable */
/* eslint-disable */
declare module "node-config-ts" {
  interface IConfig {
    host: string
    port: number
    database: string
    user: string
    password: string
    connectionLimit: number
    sslPemFile: string
    sslRejectUnauthorized: boolean
    testQuery: string
  }
  export const config: Config
  export type Config = IConfig
}
