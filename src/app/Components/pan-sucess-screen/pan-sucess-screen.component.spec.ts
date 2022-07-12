import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanSucessScreenComponent } from './pan-sucess-screen.component';

describe('PanSucessScreenComponent', () => {
  let component: PanSucessScreenComponent;
  let fixture: ComponentFixture<PanSucessScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanSucessScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanSucessScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
