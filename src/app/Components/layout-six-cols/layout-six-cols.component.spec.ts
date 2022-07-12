import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSixColsComponent } from './layout-six-cols.component';

describe('LayoutSixColsComponent', () => {
  let component: LayoutSixColsComponent;
  let fixture: ComponentFixture<LayoutSixColsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutSixColsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutSixColsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
