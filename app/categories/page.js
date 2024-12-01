import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import categories from "../data/categories.json";
export default function page() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8 mt-[100px]">
        <h1 className="text-5xl font-bold mb-12">Categories</h1>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {categories.map((category) => {
            return (
              <Link href={`/recipelist/${category.id}`} key={category.id} className="text-center">
                <div className="overflow-hidden rounded-full mb-4 relative cursor-pointer">
                  <Image
                    src={`${category.image}`}
                    alt="Seafood"
                    width={100}
                    height={100}
                    className="w-full h-auto transform transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </div>
                <h2 className="text-xl font-semibold">{category.name}</h2>
              </Link>
            );
          })}
        </div>
      </main>
      <Footer/>
    </>
  );
}
