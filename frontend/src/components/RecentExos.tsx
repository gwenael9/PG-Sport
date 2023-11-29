// export type RecentExo = {
//     id: number;
//     title: string;
//     contenu: string;
//     date: Date;
//     picture: string;
// }

import Exos from "./Exos"

export default function RecentExos() {

    const exos = [
        {
            link: "/seances/bras",
            image: "/images/bras.jpg",
            title: "bras",
            contenu: "test",
        },
        {
            link: "/seances/jambes",
            image: "/images/jambes.jpg",
            title: "jambes",
            contenu: "test",
        },
        {
            link: "/seances/pecs",
            image: "/images/pecs.jpg",
            title: "pecs",
            contenu: "test",
        },
        {
            link: "/seances/dos",
            image: "/images/dos.jpg",
            title: "dos",
            contenu: "test",
        },
        {
            link: "/seances/epaules",
            image: "/images/epaules.jpg",
            title: "epaules",
            contenu: "test",
        },

    ]
    return (
        <div className="pt-6">
            <h2 className="text-white">3 derniers exercices</h2>

            <section className="flex flex-wrap">
                {exos.map((e) => (
                    <Exos {...e} key={e.title} />
                ))}
            </section>
        </div>
    )
}