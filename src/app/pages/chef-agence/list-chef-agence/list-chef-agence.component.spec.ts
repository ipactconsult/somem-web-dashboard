import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChefAgenceComponent } from './list-chef-agence.component';

describe('ListChefAgenceComponent', () => {
  let component: ListChefAgenceComponent;
  let fixture: ComponentFixture<ListChefAgenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListChefAgenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListChefAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
