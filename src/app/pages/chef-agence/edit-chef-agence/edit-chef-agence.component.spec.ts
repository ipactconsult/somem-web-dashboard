import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChefAgenceComponent } from './edit-chef-agence.component';

describe('EditChefAgenceComponent', () => {
  let component: EditChefAgenceComponent;
  let fixture: ComponentFixture<EditChefAgenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditChefAgenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChefAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
