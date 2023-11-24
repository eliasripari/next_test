"use client";

import RecipeForm from "@/app/components/FormRecipe";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getRecipes } from "@/app/data/getData";

function editRecipe() {
  const id = useParams().id;
  const recipes = getRecipes();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    setRecipe(recipes.find((el) => Number(el.id) === Number(id)));
    console.log(recipe);
  }, [recipes]);

  return (
    <main className="container mx-auto">
      <h1 className="text-4xl mb-5">Edita qui la tua ricetta</h1>
      <div>
        <RecipeForm recipe={recipe} allRecipes={recipes} />
      </div>
    </main>
  );
}

export default editRecipe;
