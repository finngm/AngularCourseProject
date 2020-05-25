import { Recipe } from '../recipe.model';
import * as RecipesAction from './recipe.action';

export interface State {
    recipes: Recipe[];
}

const initialState: State = {
    recipes: []
}

export function recipeReducer(state = initialState, action: RecipesAction.RecipeActionTypes) {
    switch (action.type) {
        case RecipesAction.SET_RECIPES:
            return {
                ...state,
                recipes: [...action.payload]
            };
        case RecipesAction.ADD_RECIPE:
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            };
        case RecipesAction.UPDATE_RECIPE:
            const updatedRecipeIndex = action.payload.index;
            const updatedRecipe = { 
                ...state.recipes[updatedRecipeIndex],
                ...action.payload.newRecipe
            }

            const allRecipes = [...state.recipes];
            allRecipes[updatedRecipeIndex] = updatedRecipe;
        
            return {
                ...state,
                recipes: allRecipes
            };
        case RecipesAction.DELETE_RECIPE:
            return {
                ...state,
                recipes: state.recipes.filter((recipe, index) => {
                    return index !== action.payload;
                })
            };
        default:
        return state;
    }
}