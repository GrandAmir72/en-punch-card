import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAllOrdersComponent } from './dialog-all-orders.component';

describe('DialogAllOrdersComponent', () => {
  let component: DialogAllOrdersComponent;
  let fixture: ComponentFixture<DialogAllOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogAllOrdersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAllOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
