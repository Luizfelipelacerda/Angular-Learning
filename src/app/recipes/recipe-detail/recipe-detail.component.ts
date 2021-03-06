import { Component, OnInit, Input } from '@angular/core';
import { ShoppingService } from 'src/app/shopping-list/shopping-list.services';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.services';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  
  @Input() recipe: Recipe;
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  addToShoppingList(){
    this.recipeService.addIngredients(this.recipe.ingredients);
  }


}
