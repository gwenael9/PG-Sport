import Link from "next/link";

type ExoCardProps = {
    image: string;
    contenu: string;
    title: string;
    link: string;
}

export default function Exos({
    image, contenu, title, link
}: ExoCardProps) {
    return (
        <div>
            <Link href={link}>
                <div className="shadow-md border rounded-lg  p-6 bg-white mr-3 mb-3">
                    <img className="h-[200px] w-60 object-cover rounded-md" src={image} />
                    <div className="flex justify-between pt-6">
                        <div className="ad-card-title">{title}</div>
                        <p>{contenu}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}