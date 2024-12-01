import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import recipes from "../../../data/recipes.json";
export default function Recipes({ params }) {
  const recipe = recipes.find((recipe) => recipe.category_id == params.id);
  // console.log(params);
  // console.log(params.iden);
  // console.log(recipe);
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8 mt-[100px]">
        <article>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {recipe.title}
          </h1>
          <div className="flex items-center space-x-4 mb-6">
            <Image
              src="/avater.png"
              width={100}
              height={100}
              alt="Author"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-gray-600">{recipe.author}</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">{recipe.cooking_time}</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">{recipe.published_date}</span>
          </div>
          <div className="flex justify-between items-center mb-8">
            <div className="flex space-x-4">
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline-block mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
                Share
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline-block mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
                Save
              </button>
            </div>
          </div>
          <Image
            src={`/thumbs/${recipe.thumbnail}`}
            width={100}
            height={60}
            alt="Cooking Image"
            className="w-full h-1/2 mb-8 rounded-lg"
          />
          <p className="text-gray-600 mb-8">
            One thing I learned living in the Catskills section of Brooklyn, NY
            was how to cook a good Italian meal. Here is a recipe I created
            after having this dish in a restaurant. Enjoy!
          </p>
        </article>

        <section className="my-12">
          <h2 className="text-3xl font-bold mb-8">You might also like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <Image
                src={`/thumbs/${recipe.thumbnail}`}
                width={100}
                height={100}
                alt="Recipe 1"
                className="w-full h-60 object-cover rounded-lg mb-2"
              />
              <h3 className="font-semibold">{recipe.title}</h3>
            </div>
            <div>
              <Image
                src={`/thumbs/${recipe.thumbnail}`}
                width={100}
                height={100}
                alt="Recipe 2"
                className="w-full h-60 object-cover rounded-lg mb-2"
              />
              <h3 className="font-semibold">{recipe.title}</h3>
            </div>
            <div>
              <Image
                src={`/thumbs/${recipe.thumbnail}`}
                width={100}
                height={100}
                alt="Recipe 3"
                className="w-full h-60 object-cover rounded-lg mb-2"
              />
              <h3 className="font-semibold">{recipe.title}</h3>
            </div>
            <div>
              <Image
                src={`/thumbs/${recipe.thumbnail}`}
                width={100}
                height={100}
                alt="Recipe 4"
                className="w-full h-60 object-cover rounded-lg mb-2"
              />
              <h3 className="font-semibold">{recipe.title}</h3>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
