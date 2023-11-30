import { useCategoriesQuery } from "@/graphql/generated/schema"
import Link from "next/link";

export default function CategorieCard() {

    const { data, loading } = useCategoriesQuery();
    if (loading) return "Chargement...";

    const categories = data?.categories || [];

    return (
        <div className="flex">
            {categories.map((cat) => (
                <Link href={`/categorie/${cat.id}`} >
                <div className="shadow-md border rounded-lg bg-primary p-6 mr-3 mb-3">
                    <div className="text-white">
                        <div className="ad-card-title">{cat.name.toUpperCase()}</div>
                    </div>
                </div>
            </Link>
            ))}
        </div>
    )
}