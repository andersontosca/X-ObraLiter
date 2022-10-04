import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmblemasComponent } from './emblemas.component';

describe('EmblemasComponent', () => {
  let component: EmblemasComponent;
  let fixture: ComponentFixture<EmblemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmblemasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmblemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
