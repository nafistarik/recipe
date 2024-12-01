import Image from "next/image";
import Link from "next/link";
import recipes from "../data/recipes.json";
import banner from "/public/thumbs/thumb-1.jpg";

export default function Hero() {
  console.log(recipes[4]);
  return (
      <section className="mb-16 bg-orange-50">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image src={banner} width={100}  alt="Mighty Super Cheesecake" className="w-full h-[450px] object-cover rounded-lg" />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{recipes[4].title}</h1>
          <p className="text-gray-600 mb-4">
          {recipes[4].description}</p>
          <Link href={`/recipes/${recipes[4].category_id}/${recipes[4].title}`}
            className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600">View Recipe</Link>
        </div>
      </div>
    </section>
  );
}
