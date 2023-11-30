import db from "./db";
import { Exo } from "./entities/exo";
import { Category } from "./entities/category";

async function clearDB() {
  const runner = db.createQueryRunner();
  await runner.query("SET session_replication_role = 'replica'");
  await Promise.all(
    db.entityMetadatas.map(async (entity) =>
      runner.query(`ALTER TABLE ${entity.tableName} DISABLE TRIGGER ALL`)
    )
  );
  await Promise.all(
    db.entityMetadatas.map(async (entity) =>
      runner.query(`DROP TABLE IF EXISTS ${entity.tableName} CASCADE`)
    )
  );
  await runner.query("SET session_replication_role = 'origin'");
  await db.synchronize();
}

async function main() {
  await db.initialize();
  await clearDB();

  const test = Exo.create({
    title: "Prise marteau",
    rep: 8,
    serie: 3,
    poids: 12,
    date: "29/11"
  });

  const testCat = Category.create({ name: "bras"});

  test.category = testCat;

  await test.save();

}

main();