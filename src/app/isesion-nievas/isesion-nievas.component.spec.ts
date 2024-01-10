import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsesionNievasComponent } from './isesion-nievas.component';

describe('IsesionNievasComponent', () => {
  let component: IsesionNievasComponent;
  let fixture: ComponentFixture<IsesionNievasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsesionNievasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsesionNievasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
