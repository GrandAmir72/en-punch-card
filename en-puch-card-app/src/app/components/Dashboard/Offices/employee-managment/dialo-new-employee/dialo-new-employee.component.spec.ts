import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialoNewEmployeeComponent } from './dialo-new-employee.component';

describe('DialoNewEmployeeComponent', () => {
  let component: DialoNewEmployeeComponent;
  let fixture: ComponentFixture<DialoNewEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialoNewEmployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialoNewEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
