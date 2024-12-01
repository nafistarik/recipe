import Image from "next/image";
import Link from "next/link";
import recipes from "../data/recipes.json";

export default function Latest() {
  return (
    <section id="latest" className="mb-16 mt-[100px]">
      <h2 className="text-3xl font-bold mb-8">Latest Recipes</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {recipes.sort((b,a)=> new Date(a.published_date) -  new Date(b.published_date)).slice(0,4).map((recipe) => {
          return (
            <Link href={`/recipes/${recipe.category_id}/${recipe.title}`} key={recipe.id} className="cursor-pointer">
              <Image
                src={`/thumbs/${recipe.thumbnail}`}
                alt={recipe.title}
                width={100}
                height={100}
                className="w-full h-[300px] object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
              <p className="text-gray-600">{recipe.title}</p>
              <p className="text-gray-600">{recipe.published_date}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
