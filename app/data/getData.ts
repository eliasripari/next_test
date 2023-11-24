"use client";

import { useEffect, useState } from "react";

export function getRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      const response = await fetch("/api/recipes");
      const data = await response.json();
      setRecipes(data);
    }
    fetchRecipes();
  }, []);
  return recipes;
}

export function getPrep() {
  const [preps, setPreps] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      const response = await fetch("/api/prep");
      const data = await response.json();
      setPreps(data);
    }
    fetchRecipes();
  }, []);
  console.log(preps);
  return preps;
}

export function getCatagories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch("/api/categories");
      const data = await response.json();
      setCategories(data);
    }
    fetchCategories();
  }, []);
  return categories;
}
