"use client";

import { getPrep, getRecipes, getCatagories } from "@/app/data/getData";
import Recipes from "./components/Recipes";

export default function Home() {
  const recipes = getRecipes(); // Recuperiamo le ricette
  const allCategories = getCatagories();

  return (
    <>
      <main className="container mx-auto">
        <Recipes recipes={recipes} allCategories={allCategories} />
      </main>
    </>
  );
}
