import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Grapes', 500)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    // add a new ingredient to recipe
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.getIngredients());
    }

    // add ingredients to list
    assignRecipeIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.getIngredients());
    }

    updateIngredient(index: number, item: Ingredient) {
        this.ingredients[index] = item;
        this.ingredientsChanged.next(this.getIngredients());
    }

    removeIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.getIngredients());
    }
}