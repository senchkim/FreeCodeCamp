import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-recipe-box',
  templateUrl: './recipe-box.component.html',
  styleUrls: ['./recipe-box.component.less']
})
export class RecipeBoxComponent implements OnInit {

  isOpenRecipe = false;
  isEditDialog = false;
  @Input() recipe;
  @Output() deleteItem: EventEmitter<any> = new EventEmitter<any>();
  @Output() updateItem: EventEmitter<any> = new EventEmitter<any>();


  constructor() {
  }

  ngOnInit() {
  }

  openRecipe() {
    this.isOpenRecipe = true;
  }

  hideRecipe() {
    this.isOpenRecipe = false;
  }

  editRecipe() {
    this.isEditDialog = true;
  }

  editDialogClose() {
    this.isEditDialog = false;
  }

  saveDialogClose() {
    this.updateItem.emit(this.recipe);
    this.editDialogClose();
  }

  deleteRecipe(itemId: any) {
    this.deleteItem.emit(itemId);
  }
}
