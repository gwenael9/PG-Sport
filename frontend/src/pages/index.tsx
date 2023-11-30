import CategorieCard from "@/components/CategorieCard";
import Layout from "@/components/Layout";

export default function Home() {
    return (
        <Layout title="Accueil">
            <h1 className="pt-6 pb-6 text-2xl">Quelle séance voulez-vous faire ?</h1>
            <CategorieCard />
        </Layout>
    )
}