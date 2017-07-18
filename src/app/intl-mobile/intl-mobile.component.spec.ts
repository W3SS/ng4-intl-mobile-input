import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntlMobileComponent } from './intl-mobile.component';

describe('IntlMobileComponent', () => {
  let component: IntlMobileComponent;
  let fixture: ComponentFixture<IntlMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntlMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntlMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
