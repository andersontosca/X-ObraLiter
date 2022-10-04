import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEmblemasComponent } from './register-emblemas.component';

describe('RegisterEmblemasComponent', () => {
  let component: RegisterEmblemasComponent;
  let fixture: ComponentFixture<RegisterEmblemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterEmblemasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterEmblemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
