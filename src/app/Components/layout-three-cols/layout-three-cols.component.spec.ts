import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutThreeColsComponent } from './layout-three-cols.component';

describe('LayoutThreeColsComponent', () => {
  let component: LayoutThreeColsComponent;
  let fixture: ComponentFixture<LayoutThreeColsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutThreeColsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutThreeColsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
