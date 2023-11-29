import { Resolver, Query, Arg, Mutation, Int } from "type-graphql";
import { Exo, NewExoInput, UpdateExoInput } from "../entities/exo";
import { GraphQLError } from "graphql";
import { validate } from "class-validator";
import { In, Like } from "typeorm";

@Resolver(Exo)
export default class ExosResolver {

    @Query(() => [Exo])
    async exos( @Arg("categoryId", () => Int, { nullable: true }) categoryId?: number, @Arg("title", { nullable: true }) title?: string) {
        return Exo.find({
            relations: { category: true },
            where: {
                title: title ? Like(`%${title}%`) : undefined,
                category: {
                    id: categoryId,
                },
            },
        });
    }

    @Query(() => Exo)
    async getExoById(@Arg("exoId", () => Int) id: number) {
        const exo = await Exo.findOne({
            where: { id },
            relations: { category: true },
        });
        if (!exo) throw new GraphQLError("not found");
        return exo;
    }

    @Mutation(() => Exo)
    async createExo(@Arg("data", { validate: true }) data: NewExoInput) {
        const newExo = new Exo();
        Object.assign(newExo, data);
        const errors = await validate(newExo);
        if (errors.length !== 0)
            throw new GraphQLError("invalid data", { extensions: { errors } });
        const { id } = await newExo.save();
        return Exo.findOne({
            where: { id },
            relations: { category: true },
        });
    }

    @Mutation(() => Exo)
    async updateExo(
        @Arg("exoId") id: number,
        @Arg("data", { validate: true }) data: UpdateExoInput
    ) {
        const exoToUpdate = await Exo.findOneBy({ id });
        if (!exoToUpdate) throw new GraphQLError("not found");
        await Object.assign(exoToUpdate, data);
        await exoToUpdate.save();
        return Exo.findOne({
            where: { id },
            relations: { category: true },
        });
    }

    @Mutation(() => String)
    async deleteExo(@Arg("exoId") id: number) {
        const exo = await Exo.findOne({ where: { id } });
        if (!exo) throw new GraphQLError("not found");
        await exo.remove();
        return "deleted";
    }
}