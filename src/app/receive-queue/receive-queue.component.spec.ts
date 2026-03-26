import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveQueueComponent } from './receive-queue.component';

describe('ReceiveQueueComponent', () => {
  let component: ReceiveQueueComponent;
  let fixture: ComponentFixture<ReceiveQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiveQueueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReceiveQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
