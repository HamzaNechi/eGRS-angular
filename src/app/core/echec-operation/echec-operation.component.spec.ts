import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchecOperationComponent } from './echec-operation.component';

describe('EchecOperationComponent', () => {
  let component: EchecOperationComponent;
  let fixture: ComponentFixture<EchecOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EchecOperationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EchecOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
