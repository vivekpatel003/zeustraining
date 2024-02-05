import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FresherComponent } from './fresher.component';

describe('FresherComponent', () => {
  let component: FresherComponent;
  let fixture: ComponentFixture<FresherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FresherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FresherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
