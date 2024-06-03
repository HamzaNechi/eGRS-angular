import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessOperationComponent } from './success-operation.component';

describe('SuccessOperationComponent', () => {
  let component: SuccessOperationComponent;
  let fixture: ComponentFixture<SuccessOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuccessOperationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuccessOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
