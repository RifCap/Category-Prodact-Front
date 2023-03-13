import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCategory } from './categories.component';

describe('CategoriesComponent', () => {
  let component: ListCategory;
  let fixture: ComponentFixture<ListCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCategory ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
