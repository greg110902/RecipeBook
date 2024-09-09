"use client";
import SupabaseClient from "./client";
import { useState, useEffect } from "react";

export function GetRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const client = SupabaseClient();

  useEffect(() => {
    const fetchRecipes = async () => {
      const { data, error } = await client.from("recipes").select();
      setRecipes(data);
      setLoading(false);
    };
    fetchRecipes();
  });

  if (!loading) {
    return recipes;
  }
}
