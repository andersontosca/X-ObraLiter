import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmblemsComponent } from './emblems.component';

describe('EmblemsComponent', () => {
  let component: EmblemsComponent;
  let fixture: ComponentFixture<EmblemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmblemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
