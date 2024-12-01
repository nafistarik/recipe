import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import Link from "next/link";
import categories from "../../data/categories";
import recipes from "../../data/recipes";

export default function page({ params }) {
  console.log(categories);
  console.log(params);
  const filteredRecipes = recipes.filter(r => r.category_id == params.id);
  return (
    <>
    <Header/>
    <main className="container mx-auto px-4 py-8 mt-[100px]">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">
            {categories.find( category => category.id == params.id).name}{" "}
            <span className="text-gray-500 text-2xl font-normal">
              ({filteredRecipes.length} Recipes)
            </span>
          </h1>
          <p className="text-gray-600">
            One thing I learned living in the Canarsie section of Brooklyn, NY
            was how to cook a good Italian meal. Here is a recipe I created
            after having this dish in a restaurant. Enjoy!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredRecipes.map((recipe) => {
          return (
            <Link href={`/recipes/${recipe.category_id}/${recipe.title}`}
              key={recipe.category_id}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={`/thumbs/${recipe.thumbnail}`}
                alt={recipe.title}
                width={100} height={100}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="font-semibold text-lg mb-2">
                {recipe.title}
                </h2>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
    <Footer/>
    </>
    
  );
}
