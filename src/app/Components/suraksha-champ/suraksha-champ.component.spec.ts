import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurakshaChampComponent } from './suraksha-champ.component';

describe('SurakshaChampComponent', () => {
  let component: SurakshaChampComponent;
  let fixture: ComponentFixture<SurakshaChampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurakshaChampComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurakshaChampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
