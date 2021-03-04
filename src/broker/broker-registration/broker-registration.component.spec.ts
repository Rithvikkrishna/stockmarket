import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerRegistrationComponent } from './broker-registration.component';

describe('BrokerRegistrationComponent', () => {
  let component: BrokerRegistrationComponent;
  let fixture: ComponentFixture<BrokerRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokerRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
