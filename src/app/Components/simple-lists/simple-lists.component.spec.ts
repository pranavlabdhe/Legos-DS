import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleListsComponent } from './simple-lists.component';

describe('SimpleListsComponent', () => {
  let component: SimpleListsComponent;
  let fixture: ComponentFixture<SimpleListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
