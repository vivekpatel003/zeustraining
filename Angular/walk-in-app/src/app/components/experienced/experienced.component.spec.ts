import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencedComponent } from './experienced.component';

describe('ExperiencedComponent', () => {
  let component: ExperiencedComponent;
  let fixture: ComponentFixture<ExperiencedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExperiencedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExperiencedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
