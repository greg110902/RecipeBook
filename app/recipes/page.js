"use client";

import Card from "../components/recipes/recipe_card";
import { GetRecipes } from "../utils/supabase/functions";

export default function Page() {
  const recipes = GetRecipes();
  console.log(recipes);

  return (
    <div className="flex flex-wrap justify-center">
      {recipes != undefined ? (
        recipes.map((recipe) => {
          return (
            <Card
              image_url={recipe.img_url}
              title={recipe.title}
              recipe_id={recipe.id}
            />
          );
        })
      ) : (
        <>Loading...</>
      )}
    </div>
  );
}
