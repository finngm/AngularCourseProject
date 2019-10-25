import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Apple Pie', 'A pie made of apples', 'https://cdn.pixabay.com/photo/2018/08/09/13/35/apple-pie-3594535_960_720.jpg'),
        new Recipe('Mango Pie', 'A pie made of mangos', 'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/mango_pie_18053_16x9.jpg'),
        new Recipe('Apple Pie', 'A pie made of apples', 'https://cdn.pixabay.com/photo/2018/08/09/13/35/apple-pie-3594535_960_720.jpg')    
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}