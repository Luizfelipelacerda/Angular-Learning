import { Component } from '@angular/core';
import { Recipe } from './recipes/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-learning';
  loadedFeature: string = 'recipe';
  recipeDetails:Recipe;
  onNavigate(feature:string){
    this.loadedFeature = feature;
  }
  
  
}
