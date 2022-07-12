import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutEightFourComponent } from './layout-eight-four.component';

describe('LayoutEightFourComponent', () => {
  let component: LayoutEightFourComponent;
  let fixture: ComponentFixture<LayoutEightFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutEightFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutEightFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
