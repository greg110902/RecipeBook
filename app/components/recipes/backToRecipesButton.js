'use client'

export default function BackToRecipesButton() {
    return (
        <div className="flex justify-center py-5">
        <a href="/recipes" className="btn btn-wide bg-slate-700 text-gray-300 hover:scale-105 hover:text-white flex">
            Back to recipes
        </a>
        </div>
    )
}