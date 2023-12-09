import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const ormconfig: PostgresConnectionOptions = {
  type: "postgres",
  url: "postgres://admin:1234@localhost:5555/mediumclone",
  entities: [__dirname + "/**/*.entity{.ts,.js}"],
  synchronize: false,
  migrations: [__dirname + "/migrations/**/*{.ts,.js}"],
};

export default ormconfig;
