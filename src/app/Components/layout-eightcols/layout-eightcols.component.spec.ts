import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutEightcolsComponent } from './layout-eightcols.component';

describe('LayoutEightcolsComponent', () => {
  let component: LayoutEightcolsComponent;
  let fixture: ComponentFixture<LayoutEightcolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutEightcolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutEightcolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
