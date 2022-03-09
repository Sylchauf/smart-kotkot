import Database from "better-sqlite3";
const database = new Database("state/database.db");

const stmt = database.prepare(
  `CREATE TABLE IF NOT EXISTS eggs (
          id integer PRIMARY KEY,
          date datetime NOT NULL,
          value integer DEFAULT 0
        );`
);

stmt.run();

export default database;
