import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSimplesComponent } from './layout-simples.component';

describe('LayoutSimplesComponent', () => {
  let component: LayoutSimplesComponent;
  let fixture: ComponentFixture<LayoutSimplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutSimplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
