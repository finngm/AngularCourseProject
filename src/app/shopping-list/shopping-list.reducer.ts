import { Ingredient } from '../shared/ingredient.model';

const initialState = {
    ingredients: [
        new Ingredient('Grapes', 500)
    ]
};

export function shoppingListReducer(state = initialState, action) {

}