import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeBoxComponent } from './recipe-box.component';

describe('RecipeBoxComponent', () => {
  let component: RecipeBoxComponent;
  let fixture: ComponentFixture<RecipeBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
