import { createClient } from "@supabase/supabase-js";
import { useState, useEffect } from "react";

export async function RequestRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const supabase = createClient(
    "https://vdttmkazftyzrogtrjoq.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkdHRta2F6ZnR5enJvZ3Ryam9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE5MTM3ODUsImV4cCI6MjAzNzQ4OTc4NX0.2quEAlPDxWPl0CxlPfUeQOkR1m39THe-onc3fu4YXj4"
  );

  useEffect(() => {
    const fetchRecipes = async () => {
      const { data } = await supabase.from("recipes").select();

      setRecipes(await data);
      setLoading(false);
    };

    fetchRecipes();
  }, []);

  return recipes;
}
