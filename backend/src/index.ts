import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import ExosResolver from "./resolvers/exosResolver";
import CategoriesResolver from "./resolvers/categoriesResolver";
import db from "./db";

const port = 4001;

buildSchema({
  resolvers: [ExosResolver, CategoriesResolver],
}).then(async (schema) => {
  await db.initialize();
  const server = new ApolloServer({ schema });
  const { url } = await startStandaloneServer(server, { listen: { port } });
  console.log(`graphql server listening on ${url} zebiiiiiiiiiiii`);
});