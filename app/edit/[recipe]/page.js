"use client";

import { useState, useEffect } from "react";
import BackToRecipesButton from "@/app/components/recipes/backToRecipesButton";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

async function UpdateRecipe(id, ingredients, steps, meta, router) {
  const supabase = createClient(
    "https://vdttmkazftyzrogtrjoq.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkdHRta2F6ZnR5enJvZ3Ryam9xIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMTkxMzc4NSwiZXhwIjoyMDM3NDg5Nzg1fQ.Twd_kDEEe_f1jf1iCFjBzJNR7Pmf25d2ZzXa6G3-DbQ"
  );

  console.log(meta);
  console.log(id);

  const { error } = await supabase
    .from("recipes")
    .update({
      ingredients: ingredients,
      steps: steps,
      title: meta["title"],
      img_url: meta["url"],
    })
    .eq("id", id);

  router.push("/recipes");
}

export default function Page({ params }) {
  const [inputs, setInputs] = useState([]);
  const [steps, setSteps] = useState([]);
  const [recipe, setRecipe] = useState([]);
  const [meta, setMeta] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();

  const supabase = createClient(
    "https://vdttmkazftyzrogtrjoq.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkdHRta2F6ZnR5enJvZ3Ryam9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE5MTM3ODUsImV4cCI6MjAzNzQ4OTc4NX0.2quEAlPDxWPl0CxlPfUeQOkR1m39THe-onc3fu4YXj4"
  );

  useEffect(() => {
    const fetchRecipe = async () => {
      const { data } = await supabase
        .from("recipes")
        .select()
        .eq("id", params["recipe"]);
      setRecipe(data);
      setLoading(false);
    };

    if (isLoading) {
      fetchRecipe();
    } else {
      console.log("SETTING DETAILS");
      let formattedSteps = [];
      let formattedIngredients = [];

      recipe[0]["steps"].forEach((step) => {
        formattedSteps.push({ value: step });
      });
      recipe[0]["ingredients"].forEach((ingredient) => {
        formattedIngredients.push(ingredient);
      });

      setInputs([...formattedIngredients]);
      setSteps([...formattedSteps]);
      setMeta({ title: recipe[0]["title"], url: recipe[0]["img_url"] });
    }
  }, [isLoading]);

  // Function to handle change in input field
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...inputs];
    list[index][name] = value;
    setInputs(list);
  };
  const handleStepChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...steps];
    list[index][name] = value;
    setSteps(list);
  };

  const handleMetaChange = (event, i) => {
    const { name, value } = event.target;
    let temp = { title: meta.title, url: meta.url };
    temp[name] = value;
    setMeta(temp);
  };

  // Function to handle the addition of a new input field
  const handleAddClick = () => {
    setInputs([...inputs, { ingredient: "", quantity: "" }]);
  };
  const handleAddStepClick = () => {
    setSteps([...steps, { value: "" }]);
  };

  // Function to handle the removal of an input field
  const handleRemoveClick = (index) => {
    const list = [...inputs];
    list.splice(index, 1);
    setInputs(list);
  };
  const handleRemoveStepClick = (index) => {
    const list = [...steps];
    list.splice(index, 1);
    setSteps(list);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    var stepArray = [];
    steps.forEach((step) => {
      stepArray.push(step.value);
    });
    // Handle form submission logic here

    UpdateRecipe(params.recipe, inputs, stepArray, meta, router);
  };

  if (!isLoading) {
    console.log(params);
    return (
      <div className="justify-start">
        <BackToRecipesButton />
        <div className="border rounded p-10 m-10 justify-contet-center align-top">
          <form onSubmit={(event) => handleSubmit(event)} autoComplete="off">
            <div>
              <label>Recipe Title</label>
              <input
                placeholder="Title"
                name="title"
                value={meta.title}
                onChange={(event) => handleMetaChange(event, "title")}
                required
              ></input>
              <label>Image URL</label>
              <input
                placeholder="URL"
                name="url"
                value={meta.url}
                onChange={(event) => handleMetaChange(event, "url")}
                required
              ></input>
            </div>
            <h2>Ingredients</h2>
            {inputs.map((input, i) => (
              <div key={i} className="flex justify-center">
                <input
                  name="ingredient"
                  value={input.ingredient}
                  onChange={(event) => handleInputChange(i, event)}
                  onClick={i === inputs.length - 1 ? handleAddClick : undefined}
                  placeholder="Ingredient"
                  className="border m-1"
                />
                <input
                  name="quantity"
                  value={input.quantity}
                  onChange={(event) => handleInputChange(i, event)}
                  onClick={i === inputs.length - 1 ? handleAddClick : undefined}
                  placeholder="Quantity"
                  className="border m-1"
                />
                {inputs.length !== 1 && (
                  <button
                    onClick={() => handleRemoveClick(i)}
                    className="btn bg-slate-700 text-gray-300 hover:scale-105 hover:text-white flex"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <h2>Steps</h2>
            {steps.map((step, stepNo) => (
              <div
                key={stepNo}
                className="flex w-full align-top justify-center m-1"
              >
                <label className="mx-5 p-5 border">{stepNo + 1}</label>
                <textarea
                  name="value"
                  value={step.value}
                  onChange={(event) => handleStepChange(stepNo, event)}
                  onClick={
                    stepNo === steps.length - 1 ? handleAddStepClick : undefined
                  }
                  placeholder="Instruction"
                  className="w-3/4 border"
                />
                {steps.length !== 1 && (
                  <button
                    onClick={() => handleRemoveStepClick(stepNo)}
                    className="btn bg-slate-700 text-gray-300 hover:scale-105 hover:text-white flex ml-5"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="submit"
              className="btn btn-wide bg-slate-700 text-gray-300 hover:scale-105 hover:text-white mt-10"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  } else {
    return <>Loading...</>;
  }
}
