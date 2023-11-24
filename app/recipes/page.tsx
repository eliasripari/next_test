"use client";

import Header from "../components/Header";
import { getPrep, getRecipes, getCatagories } from "@/app/data/getData";
import Recipes from "../components/Recipes";

function AllRecipes() {
  const recipes = getRecipes(); // Recuperiamo le ricette
  const allCategories = getCatagories();
  return (
    <main className="container mx-auto z-10">
      <h2 className="text-4xl">Tutte le ricette</h2>
      <Recipes recipes={recipes} allCategories={allCategories} />
    </main>
  );
}

export default AllRecipes;
