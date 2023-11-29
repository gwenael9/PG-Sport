import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    Column,
    ManyToOne,
  } from "typeorm";
import { Length, Min } from "class-validator";
import { ObjectType, Field, Int, InputType } from "type-graphql";
import { Category } from "./category";
import { ObjectId } from "../utils";

@Entity()
@ObjectType()
export class Exo extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(() => Int)
    id: number;

    @Column({ length: 50 })
    @Field()
    title: string;

    @Column({ type: "float"})
    @Field()
    rep: number;

    @Column({ type: "float"})
    @Field()
    serie: number;

    @Column({ type: "float"})
    @Field()
    poids: number;

    @CreateDateColumn()
    @Field()
    createdAt: string;

    @ManyToOne(() => Category, (c) => c.exos, {
        cascade: true,
        onDelete: "CASCADE",
    })
    @Field()
    category: Category;
}

@InputType()
export class NewExoInput {
    @Field()
    @Length(4, 50, { message: "Le titre doit contenir entre 4 et 50 caractères" })
    title: string;

    @Field()
    @Min(0, { message: "le nombre de rep doit etre positif" })
    rep: number;

    @Field()
    @Min(0, { message: "le nombre de série doit etre positif" })
    serie: number;

    @Field()
    @Min(0, { message: "le poids doit etre positif" })
    poids: number;

    @Field(() => ObjectId)
    category: ObjectId;
}

@InputType()
export class UpdateExoInput {
    @Field({ nullable: true })
    @Length(4, 50, { message: "Le titre doit contenir entre 4 et 50 caractères" })
    title?: string;

    @Field({ nullable: true })
    @Min(0, { message: "le nombre de rep doit etre positif" })
    rep?: number;

    @Field({ nullable: true })
    @Min(0, { message: "le nombre de série doit etre positif" })
    serie?: number;

    @Field({ nullable: true })
    @Min(0, { message: "le poids doit etre positif" })
    poids?: number;

    @Field(() => ObjectId, { nullable: true })
    category?: ObjectId;
}