'use client'

export default function AddRecipeButton() {
    return (
        <div className="flex justify-center py-5">
        <a href="/recipes/add-recipe" className="btn btn-wide bg-slate-700 text-gray-300 hover:scale-105 hover:text-white flex">
            Add Recipe
        </a>
        </div>
    )
}