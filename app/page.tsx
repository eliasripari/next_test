"use client";

import { getPrep, getRecipes, getCatagories } from "@/app/data/getData";
import Recipes from "./components/Recipes";
import Hero from "./components/Hero";

export default function Home() {
  const recipes = getRecipes(); // Recuperiamo le ricette
  const allCategories = getCatagories();

  return (
    <>
      <main className="container mx-auto">
        <Hero recipes={recipes} />
        {/* <Recipes recipes={recipes} allCategories={allCategories} /> */}
      </main>
    </>
  );
}
