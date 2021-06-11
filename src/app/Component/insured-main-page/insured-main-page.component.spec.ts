import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuredMainPageComponent } from './insured-main-page.component';

describe('InsuredMainPageComponent', () => {
  let component: InsuredMainPageComponent;
  let fixture: ComponentFixture<InsuredMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuredMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuredMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
