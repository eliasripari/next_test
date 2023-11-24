"use client";

import { getRecipes, getCatagories } from "@/app/data/getData";
import RecipeForm from "../components/FormRecipe";
import Link from "next/link";

function Admin() {
  const allRecipes = getRecipes(); // Recuperiamo le ricette

  const deleteRecipe = async (id) => {
    try {
      // Invia la richiesta di eliminazione al server
      const response = await fetch(`/api/recipes/${id}`, { method: "DELETE" });
      if (!response.ok) {
        throw new Error("Errore durante l'eliminazione della ricetta");
      }

      // Aggiorna lo stato allRecipes per rimuovere la ricetta eliminata
      setAllRecipes(allRecipes.filter((recipe) => recipe.id !== id));
    } catch (error) {
      console.error("Errore durante l'eliminazione:", error);
      // Gestisci l'errore qui, ad esempio mostrando un messaggio all'utente
    }
  };

  return (
    <main className="container mx-auto">
      <h2 className="text-4xl mb-10">Admin</h2>
      <section className="grid grid-cols-12 gap-10">
        <div className="col-span-8">
          <h3 className="text-2xl">Lista Ricette</h3>
          {allRecipes.map((recipe) => (
            <article
              key={recipe.id}
              className="border p-2 my-4 flex flex-row justify-between rounded items-center"
            >
              <div className="flex flex-row gap-2 items-center">
                <img
                  src={recipe.url_immagine}
                  alt=""
                  className="aspect-square w-10 h-10 object-cover rounded"
                />
                <Link href={`/recipes/${recipe.id}`} key={recipe.id}>
                  <h3 className="text-2xl">{recipe.titolo}</h3>
                </Link>
              </div>
              <div className="flex flex-row gap-2">
                <Link href={`/admin/${recipe.id}`}>
                  <button className="">Edit</button>
                </Link>
                <button
                  className="bg-[#FA7070] text-white"
                  onClick={() => deleteRecipe(recipe.id)}
                >
                  Cancella
                </button>
              </div>
            </article>
          ))}
        </div>
        <aside className="col-span-4">
          <h3 className="text-2xl mb-4">Aggiungi Ricetta</h3>
          <RecipeForm allRecipes={allRecipes} />
        </aside>
      </section>
    </main>
  );
}

export default Admin;
