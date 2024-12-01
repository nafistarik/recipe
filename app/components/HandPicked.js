import Image from "next/image";
import Link from "next/link";
import recipes from "../data/recipes.json";

export default function HandPicked() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 animate-fade-in-down">Hand-Picked Collections</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div
          className="relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform cursor-pointer">
          <Image
            src={`/thumbs/${recipes[11].thumbnail}`} alt={recipes[11].title} width={100} height={100}
            className="w-full h-[400px] rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110" />
          <div
            className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
            <h3 className="text-xl font-semibold mb-2">{recipes[11].title}</h3>
            <Link href={`/recipes/${recipes[11].category_id}/${recipes[11].title}`} className="text-orange-300 hover:underline">View Collection</Link>
          </div>
        </div>
        <div
          className="relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform cursor-pointer">
          <Image
            src={`/thumbs/${recipes[12].thumbnail}`} alt={recipes[12].title} width={100} height={100}
            className="w-full h-[400px] rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110" />
          <div
            className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
            <h3 className="text-xl font-semibold mb-2">{recipes[12].title}</h3>
            <Link href={`/recipes/${recipes[12].category_id}/${recipes[12].title}`} className="text-orange-300 hover:underline">View Collection</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
