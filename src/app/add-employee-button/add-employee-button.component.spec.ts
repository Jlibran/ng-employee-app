import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeButtonComponent } from './add-employee-button.component';

describe('AddEmployeeButtonComponent', () => {
  let component: AddEmployeeButtonComponent;
  let fixture: ComponentFixture<AddEmployeeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmployeeButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
