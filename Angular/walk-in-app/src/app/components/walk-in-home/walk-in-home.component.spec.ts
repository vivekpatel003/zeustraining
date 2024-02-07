import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkInHomeComponent } from './walk-in-home.component';

describe('WalkInHomeComponent', () => {
  let component: WalkInHomeComponent;
  let fixture: ComponentFixture<WalkInHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WalkInHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WalkInHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
