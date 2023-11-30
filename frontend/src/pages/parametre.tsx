import Layout from "@/components/Layout";
import CategoryRow from "@/components/parametre/CategoryRow";
import { CategoriesDocument, CategoriesQuery, useCategoriesQuery, useCreateCategoryMutation, useDeleteCategoryMutation } from "@/graphql/generated/schema";
import { Category } from "@/types";
import { useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import { FormEvent } from "react";

interface CategoryRowProps {
    category: Category;
}

export default function Parametre() {

    const { data } = useCategoriesQuery();
    const categories = data?.categories || [];

    const [deleteCategory] = useDeleteCategoryMutation();
    const [createCategory] = useCreateCategoryMutation();

    const client = useApolloClient();
    const router = useRouter();

    // ajouter une catégorie
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();
          const form = e.target as HTMLFormElement;
          const data = new FormData(form);
          const json = Object.fromEntries(data.entries());

          try {
            const res = await createCategory({
              variables: { data: json as any },
            });

            if (res.data?.createCategory)
              client.writeQuery<CategoriesQuery>({
                query: CategoriesDocument,
                data: {
                  categories: [{ ...res.data?.createCategory }, ...categories],
                },
              });
            form.reset();
          } catch (err) {
            console.error(err);
          }   
    };

    // supprimer une catégorie
    const handleDeleteCategory = async (id: number) => {
        try {
          await deleteCategory({ variables: { categoryId: id } });
          client.writeQuery<CategoriesQuery>({
            query: CategoriesDocument,
            data: {
              categories: categories.filter((cat) => cat.id !== id),
            },
          });
          //refetch();
        } catch (e) {
          console.error(e);
        }
      };

    return (
        <Layout title="Paramètres">
          <h1 className="pt-6 pb-6 text-2xl">Ajouter une nouvelle catégorie</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6 p-4 bg-white shadow-md rounded-md">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nouvelle Catégorie :
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required
                    />
                </label>
                <button type="submit" className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Enregistrer</button>
            </form>

            {categories?.length !== 0 && (
                <table className="max-w-md mx-auto mt-6 shadow-md rounded-md overflow-hidden">
                    <thead className="bg-primary text-white">
                        <tr>
                            <th className="py-2 px-4">Nom</th>
                            <th className="py-2 px-4">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-secondary">
                    {categories?.map((c) => (
                        <CategoryRow
                            key={c.id}
                            handleDeleteCategory={handleDeleteCategory}
                            category={c}
                        />
                    ))}
                    </tbody>
                </table>
            )}
        </Layout>
    )
}