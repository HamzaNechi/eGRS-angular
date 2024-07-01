import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexAlertComponent } from './index-alert.component';

describe('IndexAlertComponent', () => {
  let component: IndexAlertComponent;
  let fixture: ComponentFixture<IndexAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndexAlertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
