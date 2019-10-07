import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Apple Pie', 'A pie made of apples', 'https://cdn.pixabay.com/photo/2018/08/09/13/35/apple-pie-3594535_960_720.jpg'),
    new Recipe('Apple Pie', 'A pie made of apples', 'https://cdn.pixabay.com/photo/2018/08/09/13/35/apple-pie-3594535_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
