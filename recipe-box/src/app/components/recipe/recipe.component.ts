import { Component, OnInit } from '@angular/core';
import { Recipe } from "../../models/recipe";


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.less']
})
export class RecipeComponent implements OnInit {

  isOpenDialog = false;

  recipeNew: Recipe = {
    id: null,
    name: '',
    ingredients: ''
  };


   recipes: Array<Recipe> = [
    {
      id: 1,
      name: 'Борщ',
      ingredients: 'Мясо, картофель, луковица, морковь, свекла, капуста, чеснок, томатная паста, уксус, соль, перец'
    },
    {
      id: 2,
      name: 'Солянка',
      ingredients: 'Колбаса копченая, сосиски, говядина вареная, бульонные кубики, вода, лук репчатый, масло растительное, томат пюре, маслины, сметана, огурцы маринованые'
    }
  ];


  constructor() { }

  ngOnInit() {

  }

  openDialog() {
    this.isOpenDialog = true;
  }

  closeDialog() {
    this.isOpenDialog = false;
  }

  deleteRecipe(itemId: any) {
    this.recipes = this.recipes.filter(x => x.id !== itemId);
  }

  updateRecept(itemUpdate: any) {
    this.recipes.forEach((item)=> {
      if(item.id === itemUpdate.id) {
        let item = JSON.parse(JSON.stringify(itemUpdate));
      }
    });
  }

  saveNewReceipt() {
    this.recipeNew.id = this.recipes.length + 1;
    this.recipes.push(this.recipeNew);
    this.closeDialog();
  }

}
