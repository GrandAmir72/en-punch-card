import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialAttendanceSettingComponent } from './special-attendance-setting.component';

describe('SpecialAttendanceSettingComponent', () => {
  let component: SpecialAttendanceSettingComponent;
  let fixture: ComponentFixture<SpecialAttendanceSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecialAttendanceSettingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialAttendanceSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
