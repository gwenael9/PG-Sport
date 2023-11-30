import { useExosQuery } from "@/graphql/generated/schema"

interface ExoCardProps {
    categoryId: string | number;
}

export default function ExoCard({ categoryId }: ExoCardProps) {

    const { data, loading } = useExosQuery({
        variables: { categoryId: typeof categoryId === 'string' ? parseInt(categoryId, 10) : categoryId },
    });

    if (loading) return "Chargement...";

    const exos = data?.exos || [];

    const categoryName = data?.exos[0]?.category.name || 'autre';

    // bg de la card selon la catégorie
    const getBgColor = (): string => {
        switch (categoryName.toLowerCase()) {
            case 'jambes':
                return 'bg-blue-200';
            case 'bras':
                return 'bg-green-200';
            case 'dos':
                return 'bg-red-200';
            case 'pectoraux':
                return 'bg-yellow-200';
            case 'epaule':
                return 'bg-purple-200';
            default:
                return 'bg-gray-200';
        }
    };

    // Triez les exercices par date (suppose que 'date' est une chaîne au format ISO)
    const sortedExos = exos.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    // Regroupez les exercices par date
    const groupedExos: Record<string, typeof sortedExos> = {};
    sortedExos.forEach((exo) => {
        const dateKey = exo.date.split('T')[0]; // Utilisez uniquement la partie date
        if (!groupedExos[dateKey]) {
            groupedExos[dateKey] = [];
        }
        groupedExos[dateKey].push(exo);
    });
    
    
    return (
        // <div className="flex">
        //     {exos.map((e) => (
        //         <div key={e.id} className={`border p-4 m-4 ${getBgColor()}`} >
        //             <h3 className="text-xl font-bold mb-2">{e.title}</h3>
        //             <p className="mb-2">Nombre de rep : {e.rep}</p>
        //             <p className="mb-2">Poids : {e.poids} kg</p>
        //             <p className="mb-2">Nombre de série : {e.serie}</p>
        //             <p className="mb-2">{e.date}</p>
        //         </div>
        //     ))}
        // </div>
        <div>
            {Object.keys(groupedExos).map((dateKey) => (
                <div key={dateKey} className="mb-4">
                    <h2 className="text-xl font-bold mb-2">{dateKey}</h2>
                    <div className="flex flex-wrap">
                        {groupedExos[dateKey].map((e) => (
                            <div key={e.id} className={`border p-4 m-4 ${getBgColor()}`}>
                                <h3 className="text-xl font-bold mb-2">{e.title}</h3>
                                <p className="mb-2">Nombre de rep : {e.rep}</p>
                                <p className="mb-2">Poids : {e.poids} kg</p>
                                <p className="mb-2">Nombre de série : {e.serie}</p>
                                <p className="mb-2">{e.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}