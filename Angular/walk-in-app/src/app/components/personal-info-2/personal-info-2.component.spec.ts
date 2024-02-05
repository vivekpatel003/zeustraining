import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfo2Component } from './personal-info-2.component';

describe('PersonalInfo2Component', () => {
  let component: PersonalInfo2Component;
  let fixture: ComponentFixture<PersonalInfo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalInfo2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalInfo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
