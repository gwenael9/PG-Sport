import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import ExoCard from "@/components/ExoCard"
import { useSearchExosQuery } from "@/graphql/generated/schema";


export default function Search() {

  const router = useRouter();

  const categoryId =
    typeof router.query.categoryId === "string"
      ? parseInt(router.query.categoryId, 10)
      : undefined;
  const title = router.query.title as string;
    console.log(categoryId);
  const { data } = useSearchExosQuery({
    variables: { categoryId, title },
    skip: !router.isReady,
  });
  const exos = data?.exos || [];

  return (
    <Layout title="recherche - TGC">
      {exos.length === 0 && (
        <div>
          <p className="pb-4 pt-12">
            {" "}
            Aucune annonce ne corresspond à ces critères de recherche
          </p>

          <button
            className="btn btn-primary text-white"
            onClick={() => router.push("/search")}
          >
            Voir toutes les annonces
          </button>
        </div>
      )}

      <div className="pt-6 pb-20 flex flex-wrap">
        {exos.map((e) => (
          <ExoCard key={e.id} exo={e} link={`/exos/${e.id}`} />
        ))}
      </div>
    </Layout>
  );
}