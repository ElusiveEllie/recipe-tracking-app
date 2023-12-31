import React from "react";

function RecipeView({ recipe, deleteRecipe }) {
    return (
        <tr>
            <td className="content_td">
                <p>{recipe.name}</p>
            </td>
            <td className="content_td">
                <p>{recipe.cuisine}</p>
            </td>
            <td className="content_td">
                <img src={recipe.photo} alt={recipe.name} />
            </td>
            <td className="content_td">
                <p>{recipe.ingredients}</p>
            </td>
            <td className="content_td">
                <p>{recipe.preparation}</p>
            </td>
            <td className="content_td">
                <button name="delete" onClick={deleteRecipe}>
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default RecipeView;
