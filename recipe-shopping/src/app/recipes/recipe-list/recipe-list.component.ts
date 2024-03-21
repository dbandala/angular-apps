import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.foodandwine.com/thmb/YlgBj_G9a_psYSzA3gfU6gx9A3w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bucatini-with-mushroom-ragu-dandelion-greens-and-tarragon-FT-RECIPE0421-3a5f0d29f7264f5e9952d4a3a51f5f58.jpg'),
    new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://toriavey.com/images/2011/01/TOA109_18-1.jpeg')
  ];
  
  constructor() {
    this.recipes = [
      {
        name: 'A Test Recipe',
        description: 'This is simply a test',
        imagePath: 'https://www.maxpixel.net/static/photo/1x/Recipe-Healthy-Food-Cooking-Delicious-Diet-Plate-753954.jpg'
      },
      {
        name: 'A Test Recipe',
        description: 'This is simply a test',
        imagePath: 'https://www.maxpixel.net/static/photo/1x/Recipe-Healthy-Food-Cooking-Delicious-Diet-Plate-753954.jpg'
      }
    ];
  }


  ngOnInit() {

  }
}
