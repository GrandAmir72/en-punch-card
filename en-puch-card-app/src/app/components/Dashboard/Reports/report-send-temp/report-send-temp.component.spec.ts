import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSendTempComponent } from './report-send-temp.component';

describe('ReportSendTempComponent', () => {
  let component: ReportSendTempComponent;
  let fixture: ComponentFixture<ReportSendTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportSendTempComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportSendTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
