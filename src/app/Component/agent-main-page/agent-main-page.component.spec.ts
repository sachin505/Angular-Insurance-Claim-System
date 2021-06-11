import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentMainPageComponent } from './agent-main-page.component';

describe('AgentMainPageComponent', () => {
  let component: AgentMainPageComponent;
  let fixture: ComponentFixture<AgentMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
