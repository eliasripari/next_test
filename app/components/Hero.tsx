import Link from "next/link";
import { useEffect, useState } from "react";

function Hero({ recipes }) {
  const [recipesSearch, setRecipesSearch] = useState([]);
  const [recipeToSearch, setRecipesToSearch] = useState(null);

  useEffect(() => {
    if (recipeToSearch) {
      const filteredRecipes = recipes.filter((el) =>
        el.titolo.toLowerCase().includes(recipeToSearch.toLowerCase())
      );
      setRecipesSearch(filteredRecipes);
    } else {
      setRecipesSearch([]);
    }
  }, [recipeToSearch, recipes]);

  return (
    <section className="">
      <div className="p-10 h-[88vh] flex flex-col justify-center border rounded gap-5 bg-[url(https://images.pexels.com/photos/568370/pexels-photo-568370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-center">
        <h1 className="text-6xl text-white font-bold">
          Cerca le tue ricette preferite
        </h1>
        <div>
          <input
            type="text"
            onChange={(e) => {
              setRecipesToSearch(e.target.value);
            }}
            placeholder="Digita qualcosa per iniziare..."
            className="w-[500px]"
          />
          <div
            className={`p-2 rounded border w-[500px] ${
              recipeToSearch ? "absolute" : "hidden"
            } bg-white mt-2`}
          >
            <div className="flex flex-col">
              {recipesSearch.length > 0 ? (
                recipesSearch.map((el) => (
                  <Link href={`recipes/${el.id}`}>
                    <div className="flex flex-row gap-5 items-center hover:bg-slate-100 p-1">
                      <img
                        src={el.url_immagine}
                        alt=""
                        className="w-10 h-10 object-cover rounded"
                      />
                      <h4 className="text-xl">{el.titolo}</h4>
                    </div>
                  </Link>
                ))
              ) : (
                <div>Non abbiamo trovato nulla</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
