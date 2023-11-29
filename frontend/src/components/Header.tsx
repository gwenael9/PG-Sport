import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className="mx-auto flex items-center justify-between">

                {/* Partie gauche de la navbar */}
                <div className="flex items-center">
                    <Link href="/" className="mr-4 font-semibold text-xl deco-none border-none hover:text-red-700">
                        <span className="md:hidden">AFC</span>
                        <span className="hidden md:inline">ARSENAL</span>
                    </Link>
                </div>

                <div className="flex items-center space-x-8">
                    <Link href="/seances">Seances</Link>
                    <Link href="/suivi">Suivi</Link>
                </div>


                <Link href="/newPlayer" className="button deco-none">
                    <span className="md:hidden">Ajouter</span>
                    <span className="hidden md:inline">Ajouter un joueur</span>
                </Link>

            </div>
        </header>
    )
}