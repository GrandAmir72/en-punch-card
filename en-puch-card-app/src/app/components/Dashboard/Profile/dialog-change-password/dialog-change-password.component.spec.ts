import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogChangePasswordComponent } from './dialog-change-password.component';

describe('DialogChangePasswordComponent', () => {
  let component: DialogChangePasswordComponent;
  let fixture: ComponentFixture<DialogChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogChangePasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
