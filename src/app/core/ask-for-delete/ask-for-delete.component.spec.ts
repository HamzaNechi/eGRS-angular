import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskForDeleteComponent } from './ask-for-delete.component';

describe('AskForDeleteComponent', () => {
  let component: AskForDeleteComponent;
  let fixture: ComponentFixture<AskForDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AskForDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AskForDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
