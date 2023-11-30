import { Resolver, Mutation, Arg, Query, Int } from "type-graphql";
import { GraphQLError } from "graphql";
import { Like } from "typeorm";
import {
  Category,
  NewCategoryInput,
  UpdateCategoryInput,
} from "../entities/category";

@Resolver(Category)
export default class CategoriesResolver {

    @Mutation(() => Category)
    async createCategory(@Arg("data", { validate: true }) data: NewCategoryInput) {
        const newCategory = new Category();
        Object.assign(newCategory, data);
        const newCategoryWithId = await newCategory.save();
        return newCategoryWithId;
    }

    @Query(() => [Category])
    async categories(@Arg("name", { nullable: true }) name: string) {
        return await Category.find({
        where: { name: name ? Like(`%${name}%`) : undefined },
        order: { id: "desc" },
        });
    }

    @Query(() => Category)
    async getCatById(@Arg("catId", () => Int) id: number) {
        const cat = await Category.findOne({
            where: { id },
        });
        if (!cat) throw new GraphQLError("not found");
        return cat;
    }

    @Mutation(() => String)
    async deleteCategory(@Arg("categoryId") id: number) {
        const categoryToDelete = await Category.findOneBy({ id });
        if (!categoryToDelete) throw new GraphQLError("not found");
        await categoryToDelete.remove();
        return "ok";
    }

    @Mutation(() => Category)
    async updateCategory(
        @Arg("categoryId") id: number,
        @Arg("data", { validate: true }) data: UpdateCategoryInput
    ) {
        const categoryToUpdate = await Category.findOneBy({ id });
        if (!categoryToUpdate) throw new GraphQLError("not found");
        Object.assign(categoryToUpdate, data);
        return await categoryToUpdate.save();
    }
}