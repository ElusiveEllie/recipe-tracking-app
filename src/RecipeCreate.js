import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
    // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
    // TODO: Add the required input and textarea form elements.
    // TODO: Add the required submit and change handlers
    const initialFormState = {
        name: "",
        cuisine: "",
        photo: "",
        ingredients: "",
        preparation: "",
    };
    const [formData, setFormData] = useState({ ...initialFormState });
    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        createRecipe({ ...formData });
        setFormData({ ...initialFormState });
    };

    return (
        <form name="create" onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                                onChange={handleChange}
                                value={formData.name}
                            ></input>
                        </td>
                        <td>
                            <input
                                id="cuisine"
                                type="text"
                                name="cuisine"
                                placeholder="Cuisine"
                                required
                                onChange={handleChange}
                                value={formData.cuisine}
                            ></input>
                        </td>
                        <td>
                            <input
                                id="photo"
                                type="url"
                                name="photo"
                                placeholder="URL"
                                required
                                onChange={handleChange}
                                value={formData.photo}
                            ></input>
                        </td>
                        <td>
                            <textarea
                                id="ingredients"
                                name="ingredients"
                                placeholder="Ingredients"
                                required
                                onChange={handleChange}
                                value={formData.ingredients}
                            ></textarea>
                        </td>
                        <td>
                            <textarea
                                id="preparation"
                                name="preparation"
                                placeholder="Preparation"
                                required
                                onChange={handleChange}
                                value={formData.preparation}
                            ></textarea>
                        </td>
                        <td>
                            <button type="submit">Create</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}

export default RecipeCreate;
