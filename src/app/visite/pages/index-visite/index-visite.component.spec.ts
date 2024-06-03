import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexVisiteComponent } from './index-visite.component';

describe('IndexVisiteComponent', () => {
  let component: IndexVisiteComponent;
  let fixture: ComponentFixture<IndexVisiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndexVisiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
