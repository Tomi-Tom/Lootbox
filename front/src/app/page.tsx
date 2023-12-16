import 'tailwindcss/tailwind.css';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-900 text-white">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-blue-500 mb-4">Toombox</h1>
                <p className="text-xl mb-6">
                    Bienvenue dans l'univers des Lootboxes. Ouvre une boîte, découvre des trésors, et collectionne des items uniques !
                </p>
            </div>

            <div className="mt-8">
                <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-600">
                    Commencer l'Aventure
                </button>
            </div>

            <div className="mt-12">
                <p className="text-lg">
                    <span className="font-bold">Toombox</span> offre une expérience unique où chaque item possède sa rareté et son état. Explorez, pariez, et échangez avec vos amis pour enrichir votre collection !
                </p>
            </div>
        </main>
    );
}
