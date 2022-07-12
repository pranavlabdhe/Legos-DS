import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutFourEightComponent } from './layout-four-eight.component';

describe('LayoutFourEightComponent', () => {
  let component: LayoutFourEightComponent;
  let fixture: ComponentFixture<LayoutFourEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutFourEightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutFourEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
