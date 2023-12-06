import { TypeOrmModuleOptions } from "@nestjs/typeorm";

const config: TypeOrmModuleOptions = {
  type: "postgres",
  host: "localhost",
  port: 5555,
  username: "admin",
  password: "1234",
  database: "mediumclone",
  entities: [__dirname + "/**/*.entity{.ts,.js}"],
  synchronize: true,
};

export default config;
