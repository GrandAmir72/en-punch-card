import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralAttendanceSettingComponent } from './general-attendance-setting.component';

describe('GeneralAttendanceSettingComponent', () => {
  let component: GeneralAttendanceSettingComponent;
  let fixture: ComponentFixture<GeneralAttendanceSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralAttendanceSettingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralAttendanceSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
