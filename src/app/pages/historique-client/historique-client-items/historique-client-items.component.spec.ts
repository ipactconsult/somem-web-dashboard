import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueClientItemsComponent } from './historique-client-items.component';

describe('HistoriqueClientItemsComponent', () => {
  let component: HistoriqueClientItemsComponent;
  let fixture: ComponentFixture<HistoriqueClientItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriqueClientItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueClientItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
