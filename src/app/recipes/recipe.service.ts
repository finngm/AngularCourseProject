import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe(
    //         'Apple Pie', 
    //         'A pie made of apples', 
    //         'https://cdn.pixabay.com/photo/2018/08/09/13/35/apple-pie-3594535_960_720.jpg', 
    //         [ new Ingredient('Apple', 3), new Ingredient('Pastry', 1) ]
    //     ),
    //     new Recipe(
    //         'Mango Pie', 
    //         'A pie made of mangos', 
    //         'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/mango_pie_18053_16x9.jpg', 
    //         [ new Ingredient('Mango', 4), new Ingredient('Pastry', 1) ]
    //     ),
    //     new Recipe(
    //         'Regular Pie',
    //         'A pieee?!',
    //         'https://upload.wikimedia.org/wikipedia/commons/4/4b/Apple_pie.jpg',
    //         [ new Ingredient('Pie', 1), new Ingredient('Pastry', 100) ]
    //     ), 
    // ];
    private recipes: Recipe[] = [];

    constructor(private shoppingListService: ShoppingListService, private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>) {}

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes.slice()[index];
    }

    addIngredientsToList(ingredients: Ingredient[]) {
        //this.shoppingListService.assignRecipeIngredients(ingredients);
        this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}