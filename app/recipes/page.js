"use client";

import { GetRecipes } from "../utils/supabase/functions";

export default function Page() {
  const recipes = GetRecipes();
  console.log(recipes);

  return (
    <div>
      {recipes != undefined ? (
        recipes.map((recipe) => {
          return JSON.stringify(recipe);
        })
      ) : (
        <></>
      )}
    </div>
  );
}
