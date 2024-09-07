import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeManagmentComponent } from './office-managment.component';

describe('OfficeManagmentComponent', () => {
  let component: OfficeManagmentComponent;
  let fixture: ComponentFixture<OfficeManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfficeManagmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
