import Layout from "@/components/Layout";
import RecentExos from "@/components/RecentExos";

export default function Home() {
    return (
        <Layout title="Accueil">
            <h1 className="text-white">Bienvenue !</h1>
            <RecentExos />
        </Layout>
    )
}