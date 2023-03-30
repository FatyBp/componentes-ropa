import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoropaComponent } from './listadoropa.component';

describe('ListadoropaComponent', () => {
  let component: ListadoropaComponent;
  let fixture: ComponentFixture<ListadoropaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoropaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
