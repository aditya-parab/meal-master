import { Recipe } from "./types";



const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const searchRecipes = async (searchTerm: string, page: number) => {
  const baseUrl = new URL(`${VITE_API_BASE_URL}/api/recipes/search`);
  baseUrl.searchParams.append("searchTerm", searchTerm);
  baseUrl.searchParams.append("page", String(page));

  const response = await fetch(baseUrl);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};

export const getRecipeSummary = async (recipeId: string) => {
  const url = new URL(`${VITE_API_BASE_URL}/api/recipes/${recipeId}/summary`);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};

export const getFavouriteRecipes = async () => {
  const url = new URL(`${VITE_API_BASE_URL}/api/recipes/favourite`);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};

export const addFavouriteRecipe = async (recipe: Recipe) => {
  const url = new URL(`${VITE_API_BASE_URL}/api/recipes/favourite`);
  const body = {
    recipeId: recipe.id,
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
};

export const removeFavouriteRecipe = async (recipe: Recipe) => {
  const url = new URL(`${VITE_API_BASE_URL}/api/recipes/favourite`);
  const body = {
    recipeId: recipe.id,
  };

  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
};
