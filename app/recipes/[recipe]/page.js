"use client";

import { useState, useEffect } from "react";
import supabase from "../../utils/Supabase";
import IngredientTable from "./Table";
import BackToRecipesButton from "../../components/recipes/backToRecipesButton";
import DropDownModifyRecipe from "../../components/recipes/modifyButton";

export default function Page({ params }) {
  const [recipe, setRecipe] = useState([""]);
  const [isLoading, setLoading] = useState(true);

  const recipeID = params["recipe"];

  console.log("arrived");

  const client = supabase();

  useEffect(() => {
    const fetchRecipe = async () => {
      const { data } = await client
        .from("recipes")
        .select()
        .eq("id", Number(recipeID));
      setRecipe(await data);
      setLoading(false);
    };
    if (isLoading) {
      fetchRecipe();
    }
  }, [params]);

  if (isLoading) {
    return <>Loading</>;
  }
  console.log(recipe[0]);
  return (
    <div>
      <div className="flex items-center justify-between">
        <BackToRecipesButton className="items-center align-items-evenly" />
        <DropDownModifyRecipe
          className="items-center align-items-evenly"
          id={recipeID}
        />
      </div>
      <div>
        <h1 className="text-xl p-5 font-semibold">{recipe[0]["title"]}</h1>
        <IngredientTable data={recipe[0]["ingredients"]} />
        <ol className="m-10">
          {recipe[0]["steps"].map((step) => {
            return (
              <li className="list-item list-decimal" key={step}>
                {step}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
