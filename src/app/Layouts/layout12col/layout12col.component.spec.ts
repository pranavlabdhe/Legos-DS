import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Layout12colComponent } from './layout12col.component';

describe('Layout12colComponent', () => {
  let component: Layout12colComponent;
  let fixture: ComponentFixture<Layout12colComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Layout12colComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Layout12colComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
