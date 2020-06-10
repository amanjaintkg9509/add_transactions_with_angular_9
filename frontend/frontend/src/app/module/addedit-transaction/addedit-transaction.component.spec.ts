import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditTransactionComponent } from './addedit-transaction.component';

describe('AddeditTransactionComponent', () => {
  let component: AddeditTransactionComponent;
  let fixture: ComponentFixture<AddeditTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
