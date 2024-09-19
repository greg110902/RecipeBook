import Card from "../components/Card";
import supabase from "../utils/Supabase";
import { useEffect, useState } from "react";
import AddRecipeButton from "../components/recipes/addRecipeButton";

function RecipePage() {
  const [recipes, setRecipes] = useState([""]);
  const [loading, setLoading] = useState(true);

  const client = supabase();

  useEffect(() => {
    const fetchRecipes = async () => {
      const { data } = await client.from("recipes").select();

      setRecipes(await data);
      setLoading(false);
    };

    if (loading) {
      fetchRecipes();
    }
  }, []);

  console.log("recipes", recipes);
  if (loading) {
    return (
      <div>
        <AddRecipeButton />
        <>Loading...</>
      </div>
    );
  }

  console.log(recipes);
  return (
    <div>
      <AddRecipeButton />
      <div className=" flex flex-wrap justify-evenly">
        {recipes.map((recipe) => {
          return (
            <Card
              image_url={recipe.img_url}
              title={recipe.title}
              recipe_id={recipe.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RecipePage;
