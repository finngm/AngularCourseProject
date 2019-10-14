import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Apple Pie', 'A pie made of apples', 'https://cdn.pixabay.com/photo/2018/08/09/13/35/apple-pie-3594535_960_720.jpg'),
    new Recipe('Mango Pie', 'A pie made of mangos', 'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/mango_pie_18053_16x9.jpg'),
    new Recipe('Apple Pie', 'A pie made of apples', 'https://cdn.pixabay.com/photo/2018/08/09/13/35/apple-pie-3594535_960_720.jpg')    
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeItemSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
