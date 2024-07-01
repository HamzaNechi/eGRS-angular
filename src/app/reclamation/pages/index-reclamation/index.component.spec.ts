import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexReclamationComponent } from './index.component';

describe('IndexComponent', () => {
  let component: IndexReclamationComponent;
  let fixture: ComponentFixture<IndexReclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndexReclamationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
