import ExoCard from "@/components/ExoCard";
import Layout from "@/components/Layout";
import { useGetCatByIdQuery } from "@/graphql/generated/schema";
import { useRouter } from "next/router";

export default function CategoryDetail() {

    const router = useRouter();
    const { catId } = router.query;

    // Utilisez catId pour obtenir les détails de la catégorie
    const { data, loading } = useGetCatByIdQuery({
        variables: { catId: typeof catId === "string" ? parseInt(catId, 10) : 0 },
        skip: typeof catId === "undefined",
    });

    if (loading) return "Chargement...";

    const category = data?.getCatById;

    if (!category) return "Catégorie non trouvée";

    return (
        <Layout title={`Catégorie - ${category.name}`}>
            <h1 className="pt-6 pb-6 text-2xl">Les derniers exercices {category.name} effectués :</h1>
            <ExoCard categoryId={category.id} />
        </Layout>
    );
}
