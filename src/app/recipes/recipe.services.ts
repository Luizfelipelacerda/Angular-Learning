import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping-list.services';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Salada com salmão','Salada especial, acompanhada de macarrão e Salmão', 
        'https://realfood.tesco.com/media/images/RFO-1400x919-AsianSalmon-9a9cf566-eaad-4107-aa79-886ec53e6b31-0-1400x919.jpg',
        [{"nome":"Salada","amount":1},{"nome":"macarrão","amount":1},{"nome":"salmão","amount":1}]),
        new Recipe('Vegburguer',
        'Hamburguer com carne vegetal', 
        'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg',
        [{"nome":"bread","amount":2},{"nome":"Veg meat","amount":4},{"nome":"Salada","amount":3}]),
        new Recipe('VegPizza','Pizza Vegana', 
        'https://cdn.jamieoliver.com/home/wp-content/uploads/2016/06/2.jpg',
        [{"nome":"salada","amount":4},{"nome":"bread","amount":2},{"nome":"tomate","amount":1},{"nome":"soda","amount":1}])
    ];

    constructor(private shoppginService: ShoppingService){}

    getRecipes(){
        return this.recipes.slice();
    }
    addIngredients(ingredients: Ingredient[]){
        this.shoppginService.addIngredients(ingredients);
    }

}