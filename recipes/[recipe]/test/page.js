'use client'

import { RequestRecipes } from "../../../utils/recipeRequest"

export default function TestPage() {
    const result = RequestRecipes()

    return (
        <div>
            {JSON.stringify(result)}
        </div>
    )
}