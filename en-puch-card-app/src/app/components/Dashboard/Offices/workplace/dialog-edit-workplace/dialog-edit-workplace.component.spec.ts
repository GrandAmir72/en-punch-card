import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditWorkplaceComponent } from './dialog-edit-workplace.component';

describe('DialogEditWorkplaceComponent', () => {
  let component: DialogEditWorkplaceComponent;
  let fixture: ComponentFixture<DialogEditWorkplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogEditWorkplaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditWorkplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
