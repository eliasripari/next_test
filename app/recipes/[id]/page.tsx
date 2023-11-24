"use client";

import { getRecipes, getPrep } from "@/app/data/getData";

function Recipe({ params: { id } }) {
  // Recupero Dati
  const allRecipes = getRecipes(); // Ricette
  const allPreps = getPrep(); // Steps
  const currentId = id;

  const recipe = allRecipes.find(
    (recipe) => Number(recipe.id) === Number(currentId)
  );

  const preps = allPreps.find((prep) => {
    return Number(prep.id_recipe) === Number(recipe.id);
  });

  return (
    <main className="container mx-auto">
      <section className="grid grid-cols-12">
        <article className="col-span-8 flex flex-col gap-4">
          <img
            src={recipe && recipe.url_immagine}
            alt=""
            className="object-cover rounded w-full"
          />
          <h2 className="text-4xl">{recipe && recipe.titolo}</h2>
          <p className="text-xl">{recipe && recipe.preparazione}</p>
          <ul>
            {preps &&
              preps.istruzioni.split(",").map((el, i) => (
                <li className="">
                  {i + 1}. {el}
                </li>
              ))}
          </ul>
        </article>
        <aside className=" col-span-4"></aside>
      </section>
    </main>
  );
}

export default Recipe;
